class CurrencyConverter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = "i will convert Nok to EUR"
    }
}

customElements.define('currency-converter', CurrencyConverter);