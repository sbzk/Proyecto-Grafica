var cam : Camera;
var cam1 : Camera;
var cam2 : Camera;
var Animacion : GameObject;
var Auxiliar : GameObject;
var Alien : GameObject;
private var ACTIVA=-1;
private var APAGADA=-2;
var can : GameObject;
var timeCanvas : float;
var timeAudio : float;
var timeAnimacion : float;
var timeAlien : float;
var anim : Animator;
var sonido : AudioSource;
 
function Start () {
	cam.depth=APAGADA;
	cam1.depth=APAGADA;
	cam2.depth=ACTIVA;
	can.SetActive(false);
	sonido.enabled=false;
	anim.enabled=false;
}
 
function Update () {	
	Invoke("sound",timeAudio);
	Invoke("animator",timeAnimacion);
	Invoke("canvas",timeCanvas);
    if(Input.GetKeyDown("1")) {
		cam.depth=ACTIVA;
		cam1.depth=APAGADA;
		cam2.depth=APAGADA;
	} 
    if(Input.GetKeyDown("2")) {
		cam.depth=APAGADA;
		cam1.depth=ACTIVA;
		cam2.depth=APAGADA;
	}
	if(Input.GetKeyDown("p")){
		cam.depth=ACTIVA;
		cam1.depth=APAGADA;
		cam2.depth=APAGADA;
		Animacion.SetActive(false);
		Destroy(can);
		can=Auxiliar;		
    } 
}
function canvas(){
	can.SetActive(true);
} 
function sound(){
	sonido.enabled=true;
}
function animator(){
	anim.enabled=true;
}