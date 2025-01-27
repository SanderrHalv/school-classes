const template = document.createElement('template');
template.innerHTML = `
  <style>
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      background: #f3f3f3;
      margin: 5px 0;
      padding: 10px;
      border-radius: 4px;
    }
  </style>
  <ul id="list"></ul>
`;

export default class RandomList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['items'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'items') {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const items = this.getAttribute('items') ? this.getAttribute('items').split(',') : [];
    const list = this.shadowRoot.getElementById('list');
    list.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }
}

customElements.define('random-list', RandomList);