async function updateState(newState) {
    const response = await fetch("/developer/hybrid-javascript-php/server/update.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newState)
    });

    const text = await response.text();
    console.log("Server JSON:", text);
    const newVDOM = JSON.parse(text);

    try {
        const newVDOM = JSON.parse(text);
        const oldRaw = document.getElementById("__VDOM__").textContent;
        const oldVDOM = JSON.parse(oldRaw);
        diffAndRerender(oldVDOM, newVDOM);
        document.getElementById("__VDOM__").textContent = JSON.stringify(newVDOM);
        Object.keys(vIndexDom).forEach(id => delete vIndexDom[id]);
        indexVDOM(newVDOM);
    } catch (err) {
        console.error("Invalid JSON from server:", text);
    }
}
