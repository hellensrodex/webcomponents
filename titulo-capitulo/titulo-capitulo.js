class Titulocap extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({ mode : 'open'})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/titulo-capitulo/tituloc.css"/>
        <article>
            <h1>
                <span>
                    <slot></slot>
                </span>
            </h1>
        </article>
        `

        this.shadow.innerHTML = template
    }

}

customElements.define('titulo-capitulo' , Titulocap)