function pillola(width, height, color)
{
	let element = document.querySelector('baloon');
	element.style.height = (height + 10) + 'px';
	element.style.width = (width + 10) + 'px';

	if (height + 10 > 420 || width + 10 > 420)
	{
		pillola(190, 190, color);
		return ;
	}
	if (color == 'rgb(255, 0, 0)')
		element.style.backgroundColor = 'green';
	else if (color == 'rgb(0, 128, 0)')
		element.style.backgroundColor = 'blue';
	else if (color == 'rgb(0, 0, 255)')
		element.style.backgroundColor = 'red';
}

function smolpp(width, height, color)
{
	if (height == 200)
	{
		return ;
	}
	console.log('wewewe');
	let element = document.querySelector('baloon');
	element.style.height = (height - 5) + 'px';
	element.style.width = (width - 5) + 'px';

	if (color == 'rgb(0, 128, 0)')
		element.style.backgroundColor = 'red';
	else if (color == 'rgb(0, 0, 255)')
		element.style.backgroundColor = 'green';
	else if (color == 'rgb(255, 0, 0)')
		element.style.backgroundColor = 'blue';
}
//new