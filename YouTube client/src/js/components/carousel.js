import commonStore from '../store/store';
import Observable from '../reactive/index';
import youtubeClient from '../services/youtubeClient';
import Card from './card';

function connect(store, Component) {
  Component.prototype.changeList = input => {
    store.dispatch({
      type: 'CHANGE_LIST',
      payload: input,
    });
  };

  Component.prototype.findMore = () => {
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
      const carousel = document.querySelector('app-carousel');
      carousel.videosCount = state.countElements;
      carousel.position = state.curentPosition;
      carousel.maxIndicatorsCount = Math.ceil(state.videosInfo.length / state.countElements) - 1;
      carousel.indicatorsCount = state.curentPosition;
      carousel.connectedCallback();
    }
  });
  return new Component();
}

class AppCarousel extends HTMLElement {
  constructor() {
    super();
    this.videosCount = 0;
    this.position = 0;
    this.differenceСoordinate = 0;
    this.maxIndicatorsCount = 0;
    this.indicatorsCount = 0;

    this.addEventListener('mousedown', event => {
      this.differenceСoordinate = event.screenX;
    });
    this.addEventListener('mouseup', event => {
      this.differenceСoordinate -= event.screenX;
      this.determineDirection();
    });

    this.addEventListener('touchstart', event => {
      this.differenceСoordinate = event.changedTouches[0].screenX;
    });
    this.addEventListener('touchend', event => {
      this.differenceСoordinate -= event.changedTouches[0].screenX;
      this.determineDirection();
    });
  }

  determineDirection() {
    if (this.indicatorsCount === this.maxIndicatorsCount - 2) {
      this.findMore();
    }

    if (this.differenceСoordinate < -70) {
      this.changeList(-1);
      this.differenceСoordinate = 0;
    } else if (this.differenceСoordinate > 70) {
      this.changeList(1);
      this.differenceСoordinate = 0;
    }
    this.differenceСoordinate = 0;
  }

  createContent() {
    let content = '';
    for (let i = 1; i <= this.videosCount; i += 1) {
      content += `<description-card index=${this.videosCount * this.position +
        i}></description-card>`;
    }
    return content;
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="carousel">
    ${this.createContent()}
    </section>
  `;
  }
}

customElements.define('app-carousel', AppCarousel);

export default connect(
  commonStore,
  AppCarousel
);
