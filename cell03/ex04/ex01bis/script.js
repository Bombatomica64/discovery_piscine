function pillola(width, height, color)
{
	$("baloon").css("height", (height + 10) + "px");
	$("baloon").css("width", (width + 10) + "px");
	if (height + 10 > 420 || width + 10 > 420)
	{
		pillola(190, 190, color);
		return ;
	}
	if (color == "rgb(255, 0, 0)")
		$("baloon").css("background-color", "green");
	else if (color == "rgb(0, 128, 0)")
		$("baloon").css("background-color", "blue");
	else if (color == "rgb(0, 0, 255)")
		$("baloon").css("background-color", "red");
}

function smolpp(width, height, color)
{
	if (height == 200 || width == 200)
	{
		return ;
	}
	$("baloon").css("height", (height - 5) + "px");
	$("baloon").css("width", (width - 5) + "px");

	if (color == 'rgb(0, 128, 0)')
		$("baloon").css("background-color", "red");
	else if (color == 'rgb(0, 0, 255)')
		$("baloon").css("background-color", "green");
	else if (color == 'rgb(255, 0, 0)')
		$("baloon").css("background-color", "blue");
}