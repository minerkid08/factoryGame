import { EntityBase } from "./entityBase.js";
export class Player extends EntityBase{
	update(){
		if(this.keys["w"]){
			this.pos.y -= 4;
		}
		if(this.keys["s"]){
			this.pos.y += 4;
		}
		if(this.keys["a"]){
			this.pos.x -= 4;
		}
		if(this.keys["d"]){
			this.pos.x += 4;
		}
	}
}
