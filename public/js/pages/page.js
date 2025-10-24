// page.js
window.addEventListener("DOMContentLoaded", () => {
  let initialVDOM = window.__HJP_VDOM__;

  indexVDOM(initialVDOM);

  let state = { name: "Hybrid Javascript PHP", reactive: "PHP" };

  setInterval(() => {
    state.reactive = (state.reactive === "PHP") ? "JS" : "PHP";
      updateState(state);
  }, 1000);

  // Handle button click
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("#update-btn")) {
      state.name = (state.name === "Hybrid Javascript PHP") ? "HJP" : "Hybrid Javascript PHP";
      updateState(state);
    }
  });
});
