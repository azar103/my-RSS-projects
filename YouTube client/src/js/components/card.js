import commonStore from '../store/store';

class DescriptionCard extends HTMLElement {
  constructor() {
    super();
    this.infoForCard = {};
  }

  connectedCallback() {
    const state = commonStore.getState();
    const index = this.getAttribute('index') - 1;
    this.infoForCard = {
      ...this.infoForCard,
      ...state.videosInfo[index],
    };

    this.innerHTML = this.render();
  }

  render = () => {
    if (Object.keys(this.infoForCard).length !== 0) {
      let template = `
        <article class="card">
          <ul>
            <li class="title-and-img">
              <a href="${this.infoForCard.link}" class="title" target="_blank">${
        this.infoForCard.title
      }</a>
              <img src=${this.infoForCard.photo} alt="${this.infoForCard.title
        .split(' ')
        .slice(0, 3)}">
            </li>
            <li class="autor">
              <i class="fa fa-user" aria-hidden="true"></i>
              ${this.infoForCard.autor}
            </li>
            <li class="date-video">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              ${this.infoForCard.data}
            </li>
            <li class="count-views">
              <i class="fa fa-eye" aria-hidden="true"></i>
              ${this.infoForCard.vie}
            </li>
            <li class="video-description">
            ${this.infoForCard.description}
            </li>
          </ul>
        </article>
      `;
      return template;
    }
    return '';
  };
}

customElements.define('description-card', DescriptionCard);
