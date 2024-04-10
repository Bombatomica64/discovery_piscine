function calculate(first, operation, second)
{
	if (first === '' || second === '')
	{
		alert('Please enter both numbers.');
		return;
	}
		 // Check if the inputs are numbers
	 if (isNaN(first) || isNaN(second))
	{
		alert('Please enter valid numbers.');
		return;
	}
	let result = 0;
	let fr = parseFloat(first);
	let sc = parseFloat(second);
	switch (operation) {
		case '+':
			result = fr + sc;
			break;
		case '-':
			result = fr - sc;
			break;
		case '*':
			result = fr * sc;
			break;
		case '/':
			if (sc === 0)
			{
				alert('You cannot divide by 0.');
				return;
			}
			result = fr / sc;
			break;
		case '%':
			if (sc === 0)
			{
				alert('You cannot divide by 0.');
				return;
			}
			result = fr % sc;
			break;
		default:
			alert('Please enter a valid operation.');
			return;
	}
	alert('The result is in the console log');
	console.log(result);
}