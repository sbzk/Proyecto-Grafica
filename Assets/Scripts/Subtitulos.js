var canvas : GameObject;
private var yapase : boolean;
private var xavi : boolean;
private var pasehacepoco : boolean;
var SubAlarma : UnityEngine.UI.Text;
var SubEncontrar : UnityEngine.UI.Text;
var SubRepasar : UnityEngine.UI.Text;
private var objetosPorEncontrar : int;

function Start () {
	yapase=false;
	xavi=false;
	pasehacepoco=false;
}


function OnTriggerStay (other : Collider){	
	if(other.tag == "SubAlarma"){		
		SubAlarma.enabled=true;
		yield WaitForSeconds(4f);
		SubAlarma.enabled=false;
		other.enabled=false;	
	}
	if(other.tag == "SubNave"){		
		if(!yapase){
			SubEncontrar.enabled=true;
			yield WaitForSeconds(4f);
			SubEncontrar.enabled=false;
			yapase=true;
			yield WaitForSeconds(10f);
			xavi=true;
			
		}
		else{
			if (GameObject.FindGameObjectsWithTag("Recolectable").length!=0 && xavi && !pasehacepoco){
				SubRepasar.enabled=true;
				yield WaitForSeconds(4f);
				SubRepasar.enabled=false;
				pasehacepoco=true;
				yield WaitForSeconds(15f);
				pasehacepoco=false;
			}
		}
	}
	
	
}