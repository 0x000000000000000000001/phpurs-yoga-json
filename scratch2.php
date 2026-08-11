<?php
require_once __DIR__ . '/output/Yoga.JSON/index.php';

$iso = "2022-12-14T11:00:00Z";

$parsedEff = \Data\JSDate\majData_majJmajSmajDate_parse($iso);
$parsed = $parsedEff();
var_dump($parsed);

$dt = \Data\JSDate\majData_majJmajSmajDate_tomajDatemajTime($parsed);
var_dump($dt);
