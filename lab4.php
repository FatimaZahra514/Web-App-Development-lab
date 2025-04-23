<?php
$x = 25;
$y = 40;
$z = 35;

if ($x >= $y && $x >= $z) {
    echo "$x is the greatest";
} elseif ($y >= $x && $y >= $z) {
    echo "$y is the greatest";
} else {
    echo "$z is the greatest";
}
?>
