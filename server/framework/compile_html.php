<?php
require_once __DIR__ . '/vdom.php';

function compile_html($html_body) {
    $children = [];

    $dom = new DOMDocument('1.0', 'utf-8');
    $dom->loadHTML('<body>' . $html_body . '</body>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

    $body = ($dom->getElementsByTagName('body')->item(0));

    foreach ($body->childNodes as $node) {
        $vnode = dom_to_vdom($node);
        if($vnode !== null) {
            $children[] = $vnode;
        }
    }
    return count($children) === 1 ? $children[0] : el('div', [], $children);
}

function dom_to_vdom($node) {
    $attributes = [];
    $children = [];

    if($node->nodeType === XML_TEXT_NODE) {
        $text = trim($node->textContent);
        return $text === '' ? null : $text;
    }

    if($node->nodeType !== XML_ELEMENT_NODE) {
        return null;
    }

    foreach ($node->attributes as $attribute) {
        $attributes[$attribute->name] = $attribute->value;
    }

    foreach ($node->childNodes as $child) {
        $vchild = dom_to_vdom($child);
        if ($vchild !== null) $children[] = $vchild;
    }

    return el($node->nodeName, $attributes, $children);
}