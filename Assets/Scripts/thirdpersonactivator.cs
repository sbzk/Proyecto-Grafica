using System.Collections;
using System.Collections.Generic;
using UnityStandardAssets.Characters.ThirdPerson;
using UnityEngine;

public class thirdpersonactivator : MonoBehaviour {
	public GameObject Alien;

	// Use this for initialization
	void Start () {
		
		
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKey("p")){
				Alien.GetComponent<ThirdPersonUserControl>().enabled=true;
				Alien.GetComponent<ThirdPersonCharacter>().enabled=true;
		}
		
	}
}
