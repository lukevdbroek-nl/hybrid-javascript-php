window.addEventListener('DOMContentLoaded', () => {
    const div = makeComponent("div");
    const p = makeComponent("p");
    const h1 = makeComponent("h1");

    const app = (state) =>
        div({ id: "main" }, [
            h1({ id: "title" }, `Hello ${state.name}`),
            p({ id: "static" }, `${state.description}`)
        ]);

    const state = { name: "Hybrid JS Framework", description: "This is my description." };
    setInitialRender(app(state));
});
