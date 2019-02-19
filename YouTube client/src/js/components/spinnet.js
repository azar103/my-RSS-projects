import commonStore from '../store/store';

const template = `
<div class="spinning-square"></div>
`;

function connect(store, Component) {
  store.subscribe(state => {
    const spinner = document.querySelector('loader-spinner');
    spinner.isLoading = state.isLoading;
    spinner.connectedCallback();
  });
  return new Component();
}

class Spinner extends HTMLElement {
  constructor() {
    super();
    this.isLoading = false;
  }

  connectedCallback() {
    if (!this.isLoading) {
      this.style.display = 'none';
    } else {
      this.style.display = 'flex';
    }

    this.innerHTML = template;
  }
}

customElements.define('loader-spinner', Spinner);

export default connect(
  commonStore,
  Spinner
);
