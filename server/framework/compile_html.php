<?php
require_once __DIR__ . '/vdom.php';

function html_compile($html_body) {
    $dom = new DOMDocument('1.0', 'utf-8');
    $dom->loadHTML('<body>' . $html_body . '</body>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

    echo $dom->saveHTML($dom->getElementsByTagName('body')->item(0));
}
