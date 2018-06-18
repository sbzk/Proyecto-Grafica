var cam : Camera;
var cam1 : Camera;
var cam2 : Camera;
 
function Start () {
	cam2.enabled=true;
    cam.enabled=false;
    cam1.enabled=false;
}
 
function Update () {
    if(Input.GetKeyDown("1")) {
        cam.enabled=true;
        cam1.enabled=false;
		cam2.enabled=false;
    } 
    if(Input.GetKeyDown("2")) {
        cam.enabled=false;
        cam1.enabled=true;
		cam2.enabled=false;
    }
	if(Input.GetKeyDown("p")){
		cam2.enabled=true;
		cam.enabled=false;
        cam1.enabled=false;
	}
}