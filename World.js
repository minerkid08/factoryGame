import { v2 } from "./v2.js";
export class World {
	constructor() {
		this.canvas = document.getElementById("board");
		this.ctx = this.canvas.getContext("2d");
		this.map = {};
		alert(v2);
		try{
		//this.player = { pos: new v2(0,0) };
		this.player = {pos:{x:0,y:0}};
		}catch(e){
			alert(e);
		}
		this.grid = true;
		this.gridSize = 64;
	}
	setPlayer(p) {
		this.player = p;
	}
	update() {}
	draw() {
		this.ctx.font = "25px serif";
		this.ctx.fillStyle = "#000000";
		this.ctx.fillText(":/", 15, 30);
		if (this.grid) {
			for (
				var x = (this.player.pos.x % this.gridSize) - 63;
				x < this.canvas.width;
				x += this.gridSize
			) {
				for (
					var y = (this.player.pos.y % this.gridSize) - 63;
					y < this.canvas.height;
					y += this.gridSize
				) {
					this.ctx.strokeStyle = "rgb(0,0,0)";
					this.ctx.strokeRect(x, y, this.gridSize, this.gridSize);
				}
			}
			for(const [x,v] of Object.entries(this.map)){
				for(const [y,o] of Object.entries(v)){
					var pos = new v2(x,y);
					this.ctx.fillStyle = o.draw.color;
					this.ctx.fillRect((x + this.player.pos.x)* this.gridSize, (y + this.player.pos.y) * this.gridSize, this.gridSize, this.gridSize);
				}
			}
		}
	}
	mousePress(pos, btn) {}
	keyPress(key, state) {}
	
	addEnt(e, pos) {}
	moveEnt(e, pos) {}
	removeEnt(e) {}
}
