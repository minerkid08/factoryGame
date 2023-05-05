import { EntityBase } from "./entityBase.js";
export class Player extends EntityBase{
	start(){
		this.draw.color = "#008000";
		this.keys = {w:false, a:false, s:false, d:false};
	}
	update(){
		try{
		if(this.keys["w"]){
			this.pos.y -= 4/64;
		}
		if(this.keys["s"]){
			this.pos.y += 4/64;
		}
		if(this.keys["a"]){
			this.pos.x -= 4/64;
		}
		if(this.keys["d"]){
			this.pos.x += 4/64;
		}
		}catch(e){
			alert(e);
		}
	}
}
