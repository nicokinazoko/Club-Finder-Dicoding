class ImageFigure extends HTMLElement
{
    constructor()
    {
        super();
        console.log("Constructed !");
    }

    connectedCallback()
    {
        console.log("Connected !");
    }

    disconnectCallback()
    {
        console.log("Disconnected !");
    }

    adoptedCallback()
    {
        console.log("Adopted !");
    }

    atributeChangedCallback(name,oldValue, newValue)
    {
        console.log(`Attribute ${name} changed`);
    }

    static get observedAttributes()
    {
        return ["caption"];
    }
}


customElements.define("image-figure", ImageFigure);
