class Citacao extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({ mode : 'open'})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/citacao/citacao.css"/>
        <blockquote>
            <p>
                <slot></slot>
            </p>
        </blockquote>
        `

        this.shadow.innerHTML = template
    }

}

customElements.define('citacao-capitulo' , Citacao)