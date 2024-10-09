class Subtit extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({ mode : 'open'})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/subtitulo/subtitulo.css"/>
        <article>
            <h1><slot></slot></h1>
        </article>
        `

        this.shadow.innerHTML = template
    }

}

customElements.define('subtitulo-capitulo' , Subtit)