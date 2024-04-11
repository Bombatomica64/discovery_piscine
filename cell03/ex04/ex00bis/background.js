function changeBackground() {

let color = "#" + Math.floor(Math.random() * 0xFFFFFF).
					toString(16).padStart(6, "0");
	$("body").css("background-color", color);
}