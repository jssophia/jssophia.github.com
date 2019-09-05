class Speaker extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name");
    this.twitter = this.getAttribute("twitter");
    this.github = this.getAttribute("github");
    this.avatar = this.getAttribute("avatar");
  }

  getTwitterTag() {
    if (this.twitter) {
      return `<li>Twitter: <a href="https://twitter.com/${this.twitter}">@${this.twitter}</a></li>`;
    }
    return "";
  }

  getGithubTag() {
    if (this.github) {
      return `<li>Github: <a href="https://github.com/${this.github}">${this.github}</a></li>`;
    }
    return "";
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="speaker__avatarWrapper">
            <img
            class="speaker__avatar"
            src="${this.avatar}"
            alt=""/>
        </div>
        <div>
            <div class="speaker__name">${this.name}</div>
            <ul>
            ${this.getTwitterTag()}
            ${this.getGithubTag()}
            </ul>
        </div>`;
  }
}

customElements.define("jssophia-speaker", Speaker);
