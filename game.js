alert("a");
try{
	import deafult from "engine/World.js";
	alert("b");
	alert(World);
	var a = new World();
	a.draw();
}catch(e){
	alert(e);
}

