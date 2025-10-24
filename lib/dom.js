const makeComponent = (tag) => (attributes, children) => {
    if (!attributes || !attributes.id) {
        throw new Error("Failed to find attribute: component needs a ID");
    }

    return {
        tag,
        attributes,
        children
    }
}

const setInitialRender = (state) => {
    const virtualDOMTree = state;
    const root = document.querySelector("#root");
    root.appendChild(renderer(virtualDOMTree));
}

const setAttributes = (element, attributes) => {
    return Object.keys(attributes).forEach(key =>
        element.setAttribute(key, attributes[key])
    )
}

const renderer = ({ tag, children = "", attributes = {} }) => {
    const el = document.createElement(tag);
    setAttributes(el, attributes);

    if (typeof children === "string") {
        el.innerHTML = children;
    } else if (Array.isArray(children)) {
        children.map(renderer).forEach(el.appendChild.bind(el));
    }
    return el;
}

const areObjectsDifferent = (a, b) => {
    const allKeys = Array.from(new Set([...Object.keys(a), Object.keys(b)]));
    return allKeys.some(k => a[k] !== b[k]);
}

const areNodesDifferent = (a, b) => {
    if (!a || !b || (a.tag !== b.tag)) return true;

    const typeA = typeof a.children;
    const typeB = typeof b.children;

    return typeA !== typeB ||
        areObjectsDifferent(a, b) ||
        (typeA === 'string' && a.children != b.children);
}

const diffAndRerender = (previousNode, currentNode) => {
    if (areNodesDifferent(currentNode, previousNode)) {
        const nodeId = currentNode.attributes.id;
        previousNode.children = currentNode;
        return document.querySelector(`#${nodeId}`).replaceWith(renderer(currentNode));
    } else {
        currentNode.children.forEach((cChildNode, index) => {
            diffAndRerender(previousNode.children[index], cChildNode);
        })
    }
}