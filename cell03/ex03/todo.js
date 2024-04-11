function add() {
	let todo = prompt("Enter new task");

	if (todo === null || todo === ""){
		return;
	}

	let list = document.getElementById("ft_list");

	let newTodo = document.createElement("todo");

	newTodo.innerHTML = '<p onclick="remove(this.textContent)">'+ todo + '</p>';

	list.appendChild(newTodo);
}

function remove(textContent) {
	if (confirm("Are you sure you want to remove this task?"))
	{
		let list = document.getElementById("ft_list");
		for (let i = 0; i < list.children.length; i++) {
			let todo = list.children[i];
			if (todo.textContent === textContent) {
				list.removeChild(todo);
				return;
			}
		}
	}
}