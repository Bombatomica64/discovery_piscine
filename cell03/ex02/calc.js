function calculate(first, operation, second)
{
	  let result = 0;
	  let fr = parseInt(first);
	  let sc = parseInt(second);
	  console.log(first);
	  console.log(operation);
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
			result = fr / sc;
			break;
	}
	// alert('The result is in the console log');
	console.log(result);
}