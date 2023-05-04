import { v2 } from "./v2.js";
import { DrawParams } from "./DrawParams.js";
export class EntityBase{
	constructor(p){
		this.pos = p;
		this.size = new v2(0,0);
		this.draw = new DrawParams();
		this.start();
	}
	start(){}
	update(){}
}
