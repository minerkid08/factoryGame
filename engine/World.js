class World{
	constructor(){
		try{
		this.canvas = document.getElementById("board");
		this.ctx = this.canvas.getContext("2d");
		}catch(e){
			alert(e);
		}
	}
	update(){}
	draw(){
		this.ctx.font = "25px serif";
		this.ctx.fillStyle = "#000000";
		this.ctx.fillText(":/", 15, 30);
	}
	mousePress(){}
	keyPress(){}
	
	addEnt(){}
	moveEnt(){}
	removeEnt(){}
}
export { World };
