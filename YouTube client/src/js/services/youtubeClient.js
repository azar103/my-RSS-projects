import KEY from '../parameters/keys';

class YoutubeClient {
  constructor(key) {
    this.key = key;
  }

  getRequiredInfo(arr) {
    return arr.map(element => ({
      title: element.snippet.localized.title.slice(0, 60),
      photo: element.snippet.thumbnails.high.url,
      link: 'https://www.youtube.com/watch?v=' + element.id,
      autor: element.snippet.channelTitle.slice(0, 45),
      data: element.snippet.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-'),
      vie: element.statistics.viewCount,
      description: element.snippet.localized.description.slice(0, 120) + '...',
    }));
  }

  async getVideosInfo(request, nextList) {
    let queryStringForIDs;

    if (nextList) {
      queryStringForIDs = `https://www.googleapis.com/youtube/v3/search?pageToken=${nextList}&part=snippet&maxResults=15&type=video&q=${request}&key=${
        this.key
      }`;
    } else {
      queryStringForIDs = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${request}&key=${
        this.key
      }`;
    }

    const response = await fetch(queryStringForIDs);
    const videoList = await response.json();
    const nextPageToken = videoList.nextPageToken;
    const videosIDs = videoList.items.map(element => element.id.videoId).join(',');
    const queryStringForVideos = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videosIDs}&key=${
      this.key
    }`;

    const info = await fetch(queryStringForVideos);
    const videos = await info.json();
    return [this.getRequiredInfo(videos.items), nextPageToken, request];
  }
}

export default new YoutubeClient(KEY);
