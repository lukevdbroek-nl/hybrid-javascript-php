<?php
require_once __DIR__ . '/vdom.php';

function app($state) {
    return el("div", ["id" => "main"], [
        el("h1", ["id" => "title"], "Hello " . $state["name"]),
        el("p", [], "Static content")
    ]);
}