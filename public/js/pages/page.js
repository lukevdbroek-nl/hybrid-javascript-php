// page.js
window.addEventListener("DOMContentLoaded", () => {
  const raw = document.getElementById("__VDOM__").textContent;
  let initialVDOM = JSON.parse(raw);

  indexVDOM(initialVDOM);

  let state = { name: "Hybrid Javascript PHP" };

  // Handle button click
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("#update-btn")) {
      state.name = (state.name === "Hybrid Javascript PHP") ? "HJP" : "Hybrid Javascript PHP";
      updateState(state);
    }
  });
});
