function calculate () {

	let first = parseFloat($("#first").val());
	let second = parseFloat($("#second").val());
	let operation = $("#operator").val();

	if (first === '' || second === '')
	{
		alert('Please enter both numbers.');
		return;
	}
	 if (isNaN(first) || isNaN(second))
	{
		alert('Please enter valid numbers.');
		return;
	}

	switch (operation) {
		case '+':
			result = first + second;
			break;
		case '-':
			result = first - second;
			break;
		case '*':
			result = first * second;
			break;
		case '/':
			if (second === 0)
			{
				alert('It\'s over 9000!');
				return;
			}
			result = first / second;
			break;
		case '%':
			if (second === 0)
			{
				alert('It\'s over 9000!');
				return;
			}
			result = first % second;
			break;
		default:
			alert('Please enter a valid operation.');
			return;
	}
	alert('The result is ' + result);
	console.log(result);
}