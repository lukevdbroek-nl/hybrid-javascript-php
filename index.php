<?php
require_once __DIR__ . '\lib\app.php';

$state = ['name' => 'Hybrid Javascript PHP'];
$vdom = app($state);
$vdomJson = json_encode($vdom, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hybrid PHP + JS vDOM</title>
</head>
<body>

  <!-- PHP-rendered HTML -->
  <div id="root">
    <?= renderVDOM($vdom) ?>
  </div>

  <!-- Serialized initial vDOM for JS hydration -->
  <script id="__VDOM__" type="application/json"><?= $vdomJson ?></script>

  <!-- Framework JS runtime -->
  <script src="./lib/dom.js"></script>
  <script src="index.js"></script>
</body>
</html>
