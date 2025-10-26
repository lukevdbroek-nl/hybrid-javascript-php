let state = { name: "Hybrid Javascript PHP", reactive: "PHP" };

window.addEventListener("DOMContentLoaded", () => {
  let initialVDOM = window.__HJP_VDOM__;

  indexVDOM(initialVDOM);

  setInterval(() => {
    state.reactive = (state.reactive === "PHP") ? "JS" : "PHP";
    updateState(state);
  }, 1000);
});

// Handle button click, register toggleState function
HJP.register("toggleState", (e) => {
  state.name = (state.name === "Hybrid Javascript PHP") ? "HJP" : "Hybrid Javascript PHP";
  updateState(state);
});