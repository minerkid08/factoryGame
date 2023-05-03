import { DrawParams } from "./DrawParams.js";
import { World } from "./World.js";
import { EntityBase } from "./entityBase.js";
alert("a");
try{
	var draw = new DrawParams();
	draw.color = "#808080";
	var ent = new EntityBase(new v2(4,5), new v2(1,1), draw);
	var a = new World();
	a.addEnt(ent)
	a.draw();
}catch(e){
	alert(e);
}
