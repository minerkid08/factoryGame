import { Player } from "./player.js";
import { DrawParams } from "./DrawParams.js";
import { World } from "./World.js";
import { EntityBase } from "./entityBase.js";
import { v2 } from "./v2.js";
alert("a");
var a = new World();
alert("d");
a.setPlayer(new Player(new v2(0,0)));
alert("b");
var draw = new DrawParams();
draw.color = "#808080";
var ent = new EntityBase(new v2(4,5));
ent.draw = draw;
a.addEnt(ent);
alert("c");
var id = window.setInterval(function(){
	alert("u");
	a.update();
	alert("d");
	a.draw();
}, 50);
a.draw();
window.addEventListener("keydown", function (event) {
		if (event.defaultPrevented) {
			return; // Do nothing if the event was already processed
		}
		a.keyPress(event.key, true);
		event.preventDefault();
	}, true);
window.addEventListener("keyup", function (event) {
		if (event.defaultPrevented) {
			return; // Do nothing if the event was already processed
		}
		a.keyPress(event.key, false);
		event.preventDefault();
	}, true);
