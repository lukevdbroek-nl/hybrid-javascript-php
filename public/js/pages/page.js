window.addEventListener("DOMContentLoaded", () => {
    const raw = document.getElementById("__VDOM__").textContent;
    let initialVDOM = JSON.parse(raw);

    indexVDOM(initialVDOM);

    let name = "Hybrid Javascript PHP";

    setInterval(() => {
        name = (name === "Hybrid Javascript PHP") ? "HJP" : "Hybrid Javascript PHP";

        // create new vNode for reactive element
        const newNode = {
            tag: "h1",
            attributes: { id: "title" },
            children: `Hello ${name}`
        };

        // get previous VDOM node with ID
        const prevNode = vIndexDom['title'];

        // patch prevNode with newNode
        diffAndRerender(prevNode, newNode);

        // Change the reference in VDOM Collection
        vIndexDom['title'] = newNode;
    }, 1000);

});
