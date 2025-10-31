<?php
require_once __DIR__ . '/framework/vdom.php';
require_once __DIR__ . '/framework/compile_html.php';
require_once __DIR__ . '/components/Button.php';

function app($state) {
    $name = $state["name"] ?? "Hybrid Javascript PHP";
    $reactive = $state["reactive"] ?? "PHP";

    ob_start(); ?>
    <div id="main">
        <h1 id="title">Hello <?php echo $name; ?></h1>
        <h1 id="subtitle">This is a reactive <?php echo $reactive; ?> framework</h1>
        <p>Static content</p>
        <?php new Button("Toggle State", "toggleState"); ?>
    </div>
    <?php return compile_html(ob_get_clean());
}