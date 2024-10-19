class Citacao extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({ mode : 'open'})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>


        blockquote{
            color: var(--primariaPrincipal);
            text-align: right;
        }

        article blockquote {
            margin: 3rem 0;
            margin-left: 3rem;
        }

        p{
            font-size: 1em;
            line-height: 180%;
            font-family: "source_serif_pro", serif;
            max-width: 730px
        }
        </style>
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