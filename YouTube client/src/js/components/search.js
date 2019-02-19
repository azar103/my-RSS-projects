import commonStore from '../store/store';
import Observable from '../reactive/index';
import youtubeClient from '../services/youtubeClient';

const template = `
  <form class="search-form">
    <input type="text" placeholder="Search..." class="app-search" autocomplete="off">
    <button type="submit" class="search-button">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </form>
`;

function connect(store, Component) {
  Component.prototype.getVideo = input => {
    const action = {
      type: 'MAKE_REQUEST',
      payload: Observable.fromPromise(youtubeClient.getVideosInfo(input, undefined)),
    };
    const actionLoading = {
      type: 'SPINNER_LOADING',
      payload: { isLoading: true },
    };
    store.dispatch(action);
    store.dispatch(actionLoading);
  };
  return new Component();
}

class VideoSearch extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('submit', this.search);
  }

  search(event) {
    event.preventDefault();

    const request = this.querySelector('.app-search').value;
    if (request && !request.split('').every(elem => elem === ' ')) {
      this.getVideo(request);
    }
  }

  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('video-search', VideoSearch);

export default connect(
  commonStore,
  VideoSearch
);
