import { v2 } from "./v2.js";
export class World {
	constructor() {
		this.canvas = document.getElementById("board");
		this.ctx = this.canvas.getContext("2d");
		this.map = {};
		this.grid = true;
		this.gridSize = 64;
	}
	setPlayer(p) {
		this.player = p;
	}
	update() {
		var ents = [];
		for(const [x2,v] of Object.entries(this.map)){
			for(const [y2,o] of Object.entries(v)){
				ents.push(o);
			}
		}
		for(var i = 0; i < ents.length; i++){
			var ent = ents[i];
			if(ent.update != null){
				ent.update(this);
			}
		}
		if(this.player.update != null){
			this.player.update();
		}
	}
	draw() {
		this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
		this.ctx.font = "25px serif";
		this.ctx.fillStyle = "#000000";
		this.ctx.fillText((this.player.pos.x % this.gridSize) - 63, 15, 30);
		if (this.grid) {
			for (
				var x = ((this.player.pos.x * -this.gridSize) % this.gridSize) - 63;
				x < this.canvas.width;
				x += this.gridSize
			) {
				for (
					var y = ((this.player.pos.y * -this.gridSize) % this.gridSize) - 63;
					y < this.canvas.height;
					y += this.gridSize
				) {
					this.ctx.strokeStyle = "rgb(0,0,0)";
					this.ctx.strokeRect(x, y, this.gridSize, this.gridSize);
				}
			}
			for(const [x,v] of Object.entries(this.map)){
				for(const [y,o] of Object.entries(v)){
					try{
					var x2 = parseInt(x);
					var y2 = parseInt(y);
					this.ctx.fillStyle = o.draw.color;
					this.ctx.fillRect((x2 - this.player.pos.x)* this.gridSize, (y2 - this.player.pos.y) * this.gridSize, this.gridSize, this.gridSize);
					}catch(e){
						alert(e);
					}
				}
			}
		}
		if(this.player.draw != null){
			this.ctx.fillStyle = this.player.draw.color;
			this.ctx.fillRect(this.canvas.width/2 - this.gridSize/4, this.canvas.height/2 - this.gridSize/4, this.gridSize/2, this.gridSize/2);
		}
	}
	mousePress(pos, btn) {}
	keyPress(key, state) {
		this.player.keys[key] = state;
	}
	
	addEnt(e, pos) {
		var ent = new e(pos);
		if(this.map[pos.x] == null){
			this.map[pos.x] = {};
		}
		this.map[pos.x][pos.y] = e;
	}
	moveEnt(e, pos) {
		this.map[e.pos.x][e.pos.y] = null;
		e.pos = pos;
		if(this.map[pos.x] == null){
			this.map[pos.x] = {};
		}
		this.map[pos.x][pos.y] = e;
	}
	removeEnt(e) {}
}
