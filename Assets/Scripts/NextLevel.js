#pragma strict

//Canvas
var can : Canvas;
var timeT : float;
private var BC : boolean; 

//Animacion
var anim : Animator;
var timeA : float;

//Audio
var voz : AudioSource;
var timeV : float;
//private var BV : boolean;

function Start () {

BC = false;
can.enabled = false;
anim.enabled = false;
voz.enabled = false;
}

function Update () {

if(BC == true){
if(Input.GetKey("p")){
Application.LoadLevel("EscenaJuego");
//SceneManager.LoadScene("EscenaJuego");
}
}

Invoke("Letras", timeT);

Invoke("Animacion", timeA);

Invoke("Audio", timeV);
}

function Letras () {
can.enabled = true;
BC = true;
}

function Animacion () {
anim.enabled = true;
}

function Audio () {
voz.enabled = true;
}
