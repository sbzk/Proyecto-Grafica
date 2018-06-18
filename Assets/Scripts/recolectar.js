var TotalObjetos : int;
var ObjetosActuales : int;

var Texto : UI.Text;
var Boton : GameObject;

function Start () {
TotalObjetos = GameObject.FindGameObjectsWithTag("Recolectable").length;
}

function Update () {

}

function OnTriggerStay (other : Collider) {
	if(other.tag == "Recolectable" && Input.GetKey("e")){
		Destroy(other.gameObject);
		TotalObjetos -= 1;
	}
}
