<?php
function el(string $tag, array $attributes = [], $children = []) {
    if (is_string($children)) {
        $children = [$children];
    }
    if (!is_array($children)) {
        $children = [];
    }
    // Filter out null/undefined
    $children = array_values(array_filter($children, fn($c) => $c !== null && $c !== 'undefined'));

    return [
        "tag" => $tag,
        "attributes" => $attributes,
        "children" => $children
    ];
}

function renderVDOM($vnode) {
    if (is_string($vnode)) {
        return htmlspecialchars($vnode);
    }

    $tag = $vnode['tag'];
    $attrs = '';
    foreach ($vnode['attributes'] as $k => $v) {
        $attrs .= " {$k}=\"" . htmlspecialchars($v) . "\"";
    }

    $children = '';
    if (is_array($vnode['children'])) {
        foreach ($vnode['children'] as $child) {
            $children .= renderVDOM($child);
        }
    } else {
        $children .= htmlspecialchars($vnode['children']);
    }

    return "<{$tag}{$attrs}>{$children}</{$tag}>";
}
