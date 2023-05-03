import { World } from "./engine/World.js";
alert("a");
try{
	var a = new World();
	a.draw();
}catch(e){
	alert(e);
}
