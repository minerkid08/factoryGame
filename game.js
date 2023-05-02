alert("a");
try{
	import { World } from "./engine/World.js";
	alert("b");
	alert(World);
	var a = new World();
	world.draw();
}catch(e){
	alert(e);
}

