class Talk extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute("title");
    this.description = this.getAttribute("description");
    this.slides = this.getAttribute("slides");
    this.format = this.getAttribute("format");
    this.language = this.getAttribute("language");
  }

  getSlidesTag() {
    if (this.slides) {
      return `<span class="talk__slide"><a href="${this.slides}" class="talk__url"><i class="fas fa-desktop"></i> Slides</a></span>`;
    }
    return "";
  }

  getDescriptionTag() {
    if (this.description) {
      return `<p class="talk__description">${this.description}</p>`;
    }
    return "";
  }

  getFormatTag() {
    if (this.format) {
      return `<p class="talk__format">${this.format}</p>`;
    }
    return "";
  }

  getLanguageTag() {
    if (this.language) {
      return `<p class="talk__language">${this.language}</p>`;
    }
    return "";
  }

  connectedCallback() {
    this.innerHTML = `
        <h4 class="talk__title">
            ${this.title}
        </h4>
        ${this.getDescriptionTag()}
        ${this.getFormatTag()}
        ${this.getLanguageTag()}
        ${this.getSlidesTag()}`;
  }
}

customElements.define("jssophia-talk", Talk);
