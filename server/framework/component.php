<?php
require_once __DIR__ . '/compile_html.php';

abstract class Component {
    abstract protected function template(): string;

    public function render(): array {

    }
}