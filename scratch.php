<?php
require_once __DIR__ . '/output/Test.Main/main.mod.php';
$now = \Data\JSDate\now();
$str = \Data\JSDate\toISOString($now);
var_dump($str);
