class Speaker extends HTMLElement {

    constructor() {
        super();
        this.name = this.getAttribute('name');
        this.twitter = this.getAttribute('twitter');
        this.github = this.getAttribute('github');
        this.avatar = this.getAttribute('avatar');
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
            <li>
                Twitter:
                <a href="https://twitter.com/${this.twitter}">@${this.twitter}</a>
            </li>
            <li>
                Github:
                <a href="https://github.com/${this.github}">${this.github}</a>
            </li>
            </ul>
        </div>`;
    }
}

customElements.define('talk-speaker', Speaker);