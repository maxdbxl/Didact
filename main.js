const Didact = {
    createElement,
}

// const element = {
//     type: "h1",
//     props: {
//         title: "foo",
//         children : "Hello"
//         },
// }

/** @jsx Didact.createElement */
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
)
    



function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object" ? child : createTextElement(children)
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

const node = document.createElement(element.type)

node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children
console.log(text)

node.appendChild(text)

container.appendChild(node)
console.log(node);