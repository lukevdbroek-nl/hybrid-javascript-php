async function updateState(newState) {    
  const response = await fetch("/developer/hybrid-javascript-php/server/update.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newState)
  });

  const text = await response.text();

  try {
    const newVDOM = JSON.parse(text);
    const oldVDOM = JSON.parse(window.__HJP_VDOM__);
    diffAndRerender(oldVDOM, newVDOM);
    window.__HJP_VDOM__ = JSON.stringify(newVDOM);
    Object.keys(vIndexDom).forEach(id => delete vIndexDom[id]);
    indexVDOM(newVDOM);
  } catch (err) {
    console.error("Invalid JSON from server:", text);
  }
}
