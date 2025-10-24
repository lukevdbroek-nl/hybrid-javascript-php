<?php
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
