import { v2 } from "./v2.js";
import { EntityBase } from "./entityBase.js";
export class Box extends EntityBase{
	start(){
		this.draw.color = "#800000";
		this.maxDist = 3;
		this.dir = true;
		this.step = 0;
	}
	update(world){
		try{
		var newPos = this.pos;
		if(this.dir){
			newPos.x += 1;
			this.step += 1;
			world.moveEnt(this, this.pos);
			if(this.step == this.maxDist){
				this.dir = false;
				return;
			}
		}else{
			newPos.x -= 1;
			this.step -= 1;
			world.moveEnt(this, this.pos);
			if(this.step == 0){
				this.dir = true;
				return;
			}
		}
		}catch(e){alert(e);}
	}
}
