const events = ["click"];

// Add global HJP variable
window.HJP = {
  actions: {},
  register(name, fn) {
    this.actions[name] = fn;
  },
  call(name, e) {
    if (typeof this.actions[name] === "function") {
      this.actions[name](e);
    }
  }
};

async function updateState(newState) {    
  const response = await fetch("../server/update.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newState)
  });

  try {
    const newVDOM = await response.json();
    const oldVDOM = JSON.parse(window.__HJP_VDOM__);

    diffAndRerender(oldVDOM, newVDOM);
    indexVDOM(newVDOM);

  } catch (err) {
    const text = await response.text();
    console.error("Invalid JSON from server:", text);
  }
}
