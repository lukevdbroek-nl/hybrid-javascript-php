<?php
require_once __DIR__ . '/vdom.php';

function app($state) {
    $name = $state["name"] ?? "Hybrid Javascript PHP";
    $reactive = $state["reactive"] ?? "PHP";

    return el("div", ["id" => "main"], [
        el("h1", ["id" => "title"], "Hello " . $name),
        el("h1", ["id" => "subtitle"], "This a reactive " . $reactive . " framework"),
        el("p", [], "Static content"),
        el("button", ["id" => "update-btn"], "Toggle State")
    ]);
}
