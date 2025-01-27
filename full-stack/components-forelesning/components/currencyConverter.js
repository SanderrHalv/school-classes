class CurrencyConverter extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(getTemplate());

        this._nok = this.getAttribute('nok') || 10;
        console.log("The nok attribute is stored as a property. value", this._nok);
    }
    
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .currency-converter {
                    background-color: #f9f9f9;
                    border: 1px solid #e1e1e1;
                    padding: 10px;
                    width: 200px;
                }
            </style>
            <div class="currency-converter">
                <h3>Currency Converter</h3>
                <p>1 NOK = 0.12 USD</p>
                <p>10 NOK = 1.2 USD</p>
                <p>100 NOK = 12 USD</p>
            </div>
        `;
        return template.content;
    };
}

customElements.define('currency-converter', CurrencyConverter);