function changeBackground() 
{
	let a = Math.random();
	let color = Math.floor(a * 0xFFFFFF).toString(16).padStart(8, '0');

	let backgroundColor = '#' + color;

	let element = document.querySelector('body');
	element.style.backgroundColor = backgroundColor;
}