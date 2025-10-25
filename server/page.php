<?php
require_once __DIR__ . '/vdom.php';
require_once __DIR__ . '/framework/compile_html.php';

function app($state) {
    $name = $state["name"] ?? "Hybrid Javascript PHP";
    $reactive = $state["reactive"] ?? "PHP";

    $html = <<<HTML
    <div id="main">
        <h1 id="title">Hello {$name}</h1>
        <h1 id="subtitle">This a reactive {$reactive} framework</h1>
        <p>Static content</p>
        <button id="update-btn">Toggle State</button>
    </div>
    HTML;

    return compile_html($html);
}