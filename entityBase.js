export class EntityBase{
	constructor(p, s, d){
		this.pos = p;
		this.size = s;
		this.draw = d;
		this.start();
	}
	start(){}
	update(){}
}
