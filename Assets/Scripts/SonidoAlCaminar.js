var sonido : AudioSource;
private var espacio : boolean;
 
function Start () {
    sonido.enabled=false;
	espacio=false;
	
}
 
function Update () {
	if (!espacio){
			if (Input.GetKeyDown("space")){
				esperar();		
			}
			else
				if(Input.GetKey("c") || Input.GetKey("left shift")){
					sonido.enabled=false;
				}
				else{
					if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")){
						sonido.enabled=true;
					}
					else		
						sonido.enabled=false;
				}
	}	
}

function esperar(){
	espacio=true;
	sonido.enabled=false;
	yield WaitForSeconds(1f);
	espacio=false;
	
}