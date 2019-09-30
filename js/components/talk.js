class Talk extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute("title");
    this.slides = this.getAttribute("slides");
  }

  getSlidesTag() {
    if (this.slides) {
      return `<span class="talk__slide"><a href="${this.slides}" class="talk__url"><i class="fas fa-desktop"></i> Slides</a></span>`;
    }
    return "";
  }

  connectedCallback() {
    this.innerHTML = `
        <span class="talk__title">
            ${this.title}
        </span>
        ${this.getSlidesTag()}`;
  }
}

customElements.define("jssophia-talk", Talk);
