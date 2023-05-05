import { v2 } from "./v2.js";
import { EntityBase } from "./entityBase.js";
export class Box extends EntityBase{
	start(){
		this.draw.color = "#800000";
		this.maxDist = 3;
		this.dir = true;
		this.step = 0;
	}
	update(){
		try{
		if(this.dir){
			this.pos.x += 1;
			this.step += 1;
			if(this.step == maxDist){
				this.dir = false;
				return;
			}
		}else{
			this.pos.x -= 1;
			this.step -= 1;
			if(this.step == 0){
				this.dir = true;
				return;
			}
		}
		}catch(e){alert(e);}
	}
}
