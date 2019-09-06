class Talk extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute("title");
    this.slides = this.getAttribute("slides");
  }

  getSlidesTag() {
    if (this.slides) {
      return `<div class="talk__slide">
                <a href="${this.slides}">Slides</a>
            </div>`;
    }
    return "";
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="talk__title">
            ${this.title}
        </div>
        ${this.getSlidesTag()}`;
  }
}

customElements.define("jssophia-talk", Talk);
