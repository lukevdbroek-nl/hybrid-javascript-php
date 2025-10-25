# Hybrid JavaScript PHP (HJP)

**HJP** is a lightweight experimental framework that merges **PHP and JavaScript** using a shared **Virtual DOM**.  
It lets PHP and JS work together in real time — **no Node.js, no reloads**.

---

## Features

- **Unified vDOM** — Shared Virtual DOM between PHP & JS  
- **Reactive Updates** — PHP state changes reflected instantly in the browser  
- **Server Logic + Client Interactivity** — Combine PHP logic with live JS updates  
- **No Build Step** — Runs with native PHP and vanilla JavaScript  
- **Lightweight** — Zero dependencies, pure codebase

---

## How It Works

1. PHP renders the initial HTML and a JSON vDOM.  
2. JavaScript hydrates and diff-patches DOM updates.  
3. State changes are sent to PHP (`update.php`) and returned as a new vDOM.  

---

## Example

```php
<?php
require_once __DIR__ . '/framework/vdom.php';
require_once __DIR__ . '/framework/compile_html.php';

function app($state) {
    $name = $state["name"] ?? "Hybrid Javascript PHP";
    $reactive = $state["reactive"] ?? "PHP";

    $html = <<<HTML
    <div id="main">
        <h1 id="title">Hello {$name}</h1>
        <h1 id="subtitle">This is a reactive {$reactive} framework</h1>
        <p>Static content</p>
        <button id="update-btn">Toggle State</button>
    </div>
    HTML;

    return compile_html($html);
}
```

---

## Run Locally

```bash
php -S localhost:8000 -t project
```

Then open [http://localhost:8000/index.php](http://localhost:8000/index.php)

---

MIT License © 2025
