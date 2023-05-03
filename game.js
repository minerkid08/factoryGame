alert("a");
import { World } from "./World.js";
try{
	alert("b");
	alert(World);
	var a = new World();
	a.draw();
}catch(e){
	alert(e);
}

