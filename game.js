import { Player } from "./player.js";
import { World } from "./World.js";
import { Box } from "./box.js";
import { v2 } from "./v2.js";
alert("a");
var a = new World();
a.setPlayer(new Player(new v2(0,0)));
var ent = new Box(new v2(4,5));
a.addEnt(ent);
var id = window.setInterval(function(){
	a.update();
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
