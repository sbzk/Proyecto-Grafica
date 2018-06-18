var camTP : Camera;
var camFP : Camera;
var camAnimacion : Camera;
var Alien : GameObject;
var Animacion : GameObject;
 
function Start () {
    camAnimacion.enabled=true;
    camFP.enabled=false;
	camTP.enabled=false;
	//Alien.enabled=false;
	//Animacion.enabled=true;
	
}
 
function Update () {
    if(Input.GetKeyDown("1")) {
        camTP.enabled=true;
        camFP.enabled=false;
		if(camAnimacion)
			camAnimacion.enabled=false;
    } 
    if(Input.GetKeyDown("2")) {
        camTP.enabled=false;
        camFP.enabled=true;
		if(camAnimacion)
			camAnimacion.enabled=false;
    }
	if(Input.GetKeyDown("p")){
		if(camAnimacion){
			camTP.enabled=true;
			camFP.enabled=false;
			camAnimacion.enabled=false;
			Destroy(camAnimacion);
			//camAnimacion=void;
		}
	}
}