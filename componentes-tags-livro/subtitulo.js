class Subtit extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({ mode : 'open'})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
    

    article h1 {
    color: var(--secundariaPrincipal);
    font-size: 2em;
    font-weight: 700;
    font-family: "source_serif_pro", serif;
    word-break: break-word;
    max-width: 730px;
    hyphens: auto;
    }

    h1{
        font-size: 2em;
        font-weight: 700;
        font-family: "source serif pro", serif;
        word-break: break-word;
        max-width: 730px;
        hyphens: auto;
    }
        </style>
        <article>
            <h1><slot></slot></h1>
        </article>
        `

        this.shadow.innerHTML = template
    }

}

customElements.define('subtitulo-capitulo' , Subtit)