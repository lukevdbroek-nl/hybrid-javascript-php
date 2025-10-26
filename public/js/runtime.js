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

// When DOM is mounted, a click appropriate event listener should be added to the action call
window.addEventListener("DOMContentLoaded", () => {
  events.forEach((event) => {
    document.body.addEventListener(event, (e) => {
      const actionName = e.target.dataset[`action${capitalize(event)}`];
      if (actionName) {
        HJP.call(actionName, e);
      }
    });
  });
});

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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}