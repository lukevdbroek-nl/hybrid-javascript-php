<?php
require_once __DIR__ . '/lib/app.php';

$state = ['name' => 'Hybrid Javascript PHP'];
$vdom = app($state);
$vdomJson = json_encode($vdom, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="Hybrid PHP + JavaScript Virtual DOM Frontend Framework">
  <title>Hybrid PHP + JS vDOM</title>

  <!-- Preload and async scripts for performance -->
  <link rel="preload" href="./lib/dom.js" as="script">
  <link rel="preload" href="index.js" as="script">

  <!-- Add a favicon to avoid extra network errors -->
  <link rel="icon" href="data:;base64,iVBORw0KGgo=">
</head>
<body>

  <main id="root" role="main">
    <?= renderVDOM($vdom) ?>
  </main>

  <!-- JSON inside script tag must NOT be escaped -->
  <script id="__VDOM__" type="application/json">
    <?= $vdomJson ?>
  </script>

  <!-- Load scripts without blocking rendering -->
  <script src="./lib/dom.js" defer></script>
  <script src="index.js" defer></script>

</body>
</html>
