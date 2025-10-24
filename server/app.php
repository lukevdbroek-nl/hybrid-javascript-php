<?php
require_once __DIR__ . '/render.php';

function h1($attrs, $children) {
    return ['tag' => 'h1', 'attributes' => $attrs, 'children' => $children];
}
function p($attrs, $children) {
    return ['tag' => 'p', 'attributes' => $attrs, 'children' => $children];
}
function div($attrs, $children) {
    return ['tag' => 'div', 'attributes' => $attrs, 'children' => $children];
}

function app($state) {
    return div(['id' => 'main'], [
        h1(['id' => 'title'], "Hello {$state['name']}"),
        p(['id' => 'static'], "Static Content")
    ]);
}
