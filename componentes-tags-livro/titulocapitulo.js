class Titulocap extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({ mode : 'open'})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
        @font-face {
            font-family: "source_sans_pro";
            src: url("../fonts/SourceSansPro-Light.otf.woff2") format("woff2"), url("../fonts/SourceSansPro-Light.otf.woff") format("woff");
            font-weight: 300;
            font-style: normal
        }

        article h1 span {
            display: block;
            text-transform: lowercase;
            font-variant: small-caps;
            font-size: .6em;
            font-weight: 300;
            color: #000;
            font-family: "source_sans_pro", sans-serif;
            letter-spacing: 1px;
        }
            
        </style>
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