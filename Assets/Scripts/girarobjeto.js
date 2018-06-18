#pragma strict

var girarx : int = 0;
var girary : int = 0;
var girarz : int = 0;

function Update () {
   transform.Rotate(girarx, girary, girarz);
}