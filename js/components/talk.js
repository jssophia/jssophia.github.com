class Talk extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute("title");
    this.description = this.getAttribute("description");
    this.slides = this.getAttribute("slides");
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

  connectedCallback() {
    this.innerHTML = `
        <h4 class="talk__title">
            ${this.title}
        </h4>
        ${this.getDescriptionTag()}
        ${this.getSlidesTag()}`;
  }
}

customElements.define("jssophia-talk", Talk);
