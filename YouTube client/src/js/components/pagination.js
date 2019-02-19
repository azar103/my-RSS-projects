import commonStore from '../store/store';
import Observable from '../reactive/index';
import youtubeClient from '../services/youtubeClient';

function connect(store, Component) {
  Component.prototype.nextList = input => {
    store.dispatch({
      type: 'CHANGE_LIST',
      payload: input,
    });
  };

  Component.prototype.switch = input => {
    store.dispatch({
      type: 'SWITCH_VIDEOS',
      payload: input,
    });
  };

  Component.prototype.loadMoreVideos = () => {
    const state = store.getState();
    const actionLoading = {
      type: 'SPINNER_LOADING',
      payload: { isLoading: true },
    };
    const action = {
      type: 'LOAD_MORE_VIDEOS',
      payload: Observable.fromPromise(youtubeClient.getVideosInfo(state.search, state.nextToken)),
    };
    store.dispatch(action);
    store.dispatch(actionLoading);
  };

  store.subscribe(state => {
    if (state.countElements > 0) {
      const pagination = document.querySelector('video-pagination');
      pagination.elementsCount = state.countElements;
      pagination.maxIndicatorsCount = Math.ceil(state.videosInfo.length / state.countElements) - 1;
      pagination.indicatorsCount = state.curentPosition + 1;
      pagination.indicatorsNumbers = state.indicatorsNumber.slice();
      pagination.connectedCallback();
    }
  });
  return new Component();
}

class Pagination extends HTMLElement {
  constructor() {
    super();
    this.elementsCount = 0;
    this.maxIndicatorsCount = 0;
    this.indicatorsCount = 0;
    this.indicatorsNumbers = [];

    this.addEventListener('click', this.move);
  }

  move(event) {
    if (this.indicatorsCount === this.maxIndicatorsCount - 1) {
      this.loadMoreVideos();
    }
    if (event.target.hasAttribute('value')) {
      this.nextList(+event.target.getAttribute('value'));
    } else if (event.target.nodeName === 'LI' && event.target.classList[0] !== 'currentIndicator') {
      if (+event.target.innerText >= this.maxIndicatorsCount - 1) {
        this.loadMoreVideos();
      }
      this.switch(event.target.innerText - 1);
    }
  }

  createContent() {
    if (this.elementsCount === 0) {
      return '';
    }
    const content = `<i class="fa fa-chevron-left fa-2x" aria-hidden="true" value="-1"></i>
                    <ul class="pagination">
                      <li>${this.indicatorsNumbers[0]}</li>
                      <li>${this.indicatorsNumbers[1]}</li>
                      <li>${this.indicatorsNumbers[2]}</li>
                      <li>${this.indicatorsNumbers[3]}</li>
                    </ul>
                  <i class="fa fa-chevron-right fa-2x" aria-hidden="true" value="1"></i>`;

    return content;
  }

  connectedCallback() {
    this.innerHTML = this.createContent();
    if (this.elementsCount !== 0) {
      const currentIndex = this.indicatorsNumbers.indexOf(this.indicatorsCount);
      this.querySelectorAll('li')[currentIndex].className = 'currentIndicator';
    }
  }
}

customElements.define('video-pagination', Pagination);

export default connect(
  commonStore,
  Pagination
);
