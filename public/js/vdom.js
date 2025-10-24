const vIndexDom = {};

const indexVDOM = (node) => {
    if (!node.attributes?.id) return;
    vIndexDom[node.attributes.id] = node;
    if (Array.isArray(node.children)) {
        node.children.forEach(indexVDOM);
    }
}

const setAttributes = (element, attributes) => {
    return Object.keys(attributes).forEach(key =>
        element.setAttribute(key, attributes[key])
    )
}

const renderer = (vnode) => {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const { tag, attributes = {}, children = [] } = vnode;
  const el = document.createElement(tag);
  setAttributes(el, attributes);

  if (Array.isArray(children)) {
    children.forEach(child => {
      el.appendChild(renderer(child));
    });
  } else if (typeof children === "string") {
    el.appendChild(document.createTextNode(children));
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

const normalizeChildren = (node) => {
  if (!node) return [];
  if (typeof node.children === "string") return [node.children];
  if (Array.isArray(node.children)) return node.children;
  return [];
};

const diffAndRerender = (previousNode, currentNode) => {
  if (areNodesDifferent(currentNode, previousNode)) {
    const nodeId = currentNode.attributes.id;
    if (!nodeId) return;

    const domEl = document.querySelector(`#${nodeId}`);
    if (domEl) domEl.replaceWith(renderer(currentNode));
    vIndexDom[nodeId] = currentNode;
    return;
  }

  const prevChildren = normalizeChildren(previousNode);
  const currChildren = normalizeChildren(currentNode);

  currChildren.forEach((cChildNode, index) => {
    diffAndRerender(prevChildren[index], cChildNode);
  });
};