import '../style/style.css';
import commonStore from './store/store';
import Search from './components/search';
import Carousel from './components/carousel';
import Pagination from './components/pagination';
import Spinner from './components/spinnet';

const template = `
  <section class="my-app">
    <video-search></video-search>
    <app-carousel></app-carousel>
    <video-pagination></video-pagination>
    <loader-spinner></loader-spinner>
  </section>
`;

class YouTubeApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('youtube-app', YouTubeApp);

const createAction = data => ({
  type: 'RESIZE_PAGE',
  payload: data,
});

const resize = () => {
  if (window.innerWidth < 1100 && window.innerWidth > 880) {
    commonStore.dispatch(createAction(3));
  } else if (window.innerWidth < 880 && window.innerWidth > 620) {
    commonStore.dispatch(createAction(2));
  } else if (window.innerWidth < 620) {
    commonStore.dispatch(createAction(1));
  } else {
    commonStore.dispatch(createAction(4));
  }
};

window.addEventListener('resize', resize);
