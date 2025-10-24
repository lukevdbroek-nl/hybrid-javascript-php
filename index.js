window.addEventListener("DOMContentLoaded", () => {
    const raw = document.getElementById("__VDOM__").textContent;
    let initialVDOM = JSON.parse(raw);

    let name = "Hybrid Javascript PHP";

    setInterval(() => {
        name = (name === "Hybrid Javascript PHP") ? "HJP" : "Hybrid Javascript PHP";

        const newH1 = {
            tag: "h1",
            attributes: { id: "title" },
            children: `Hello ${name}`
        };

        // Reference the current reactive node in the static tree
        const prevH1 = initialVDOM.children[0];

        diffAndRerender(prevH1, newH1);

        // Update just that part of the virtual DOM
        initialVDOM.children[0] = newH1;
    }, 1000);

});