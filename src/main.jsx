function render(element, container) {
    // create node (text or regular)
    const domNode = 
        element.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type)
    // assign the props of the element to the node
    const isProperty = (key) => key !== "children"
 
    Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
        domNode[name] = element.props[name]
    })

    // recursive call for each child
    element.props.children.forEach(child =>
        render(child, domNode)
    )
    container.appendChild(domNode)

}

const Didact = {
    createElement,
    render,
}


/** @jsx Didact.createElement */
const element = (
    <div>
        <h1>test</h1>
        <p>test</p>
    </div>
)
    

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object" ? child : createTextElement(child)
            ),
        },
    }
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
}

const container = document.getElementById("root")
Didact.render(element, container)

// const node = document.createElement(element.type)

// node["title"] = element.props.title

// const text = document.createTextNode("")
// text["nodeValue"] = element.props.children
// console.log(text)

// node.appendChild(text)

// container.appendChild(node)
// console.log(node);

