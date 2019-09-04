class Speaker extends HTMLElement {

    constructor(twitter, github) {
        super();
        this.name = this.getAttribute('name');
        this.twitter = this.getAttribute('twitter');
        this.github = this.getAttribute('github');
    }

    connectedCallback() {
        this.innerHTML = `<div>
        <div class="speaker__name">${this.name}</div>
        <ul>
          <li>
            Twitter:
            <a href="https://twitter.com/${this.twitter}">@${this.twitter}</a>
          </li>
          <li>
            Github:
            <a href="https://github.com/${this.github}">${this.github}</a>
          </li>
        </ul>
        <div class="talk__slide">
            <a
              href="https://speakerdeck.com/mariusmez/voyagez-avec-tensorflow-dot-js">
              Slides
            </a>
        </div>
      </div>`
      this.innerHTML = this.shadowRoot.innerHTML;
    }
}

customElements.define('talk-speaker', Speaker);