import { World } from "./World.js";
alert("a");

try{
	alert("b");
	alert(World);
	var a = new World();
	a.draw();
}catch(e){
	alert(e);
}

