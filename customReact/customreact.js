function customRender(reactElement,container){
    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domelement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domelement);
}


const mainContainer = document.getElementById("root");

const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

customRender(reactElement,mainContainer)