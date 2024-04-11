function add() {
	let todo = prompt("Enter new task");

	if (todo === null || todo === ""){
		return;
	}

	let list = document.getElementById("ft_list");

	let newTodo = document.createElement("todo");

	newTodo.innerHTML = '<p onclick="remove(this.textContent)">'+ todo + '</p>';

	list.appendChild(newTodo);
	saveList();
}

function remove(textContent) {
	if (confirm("Are you sure you want to remove this task?"))
	{
		let list = document.getElementById("ft_list");
		for (let i = 0; i < list.children.length; i++) {
			let todo = list.children[i];
			if (todo.textContent === textContent) {
				list.removeChild(todo);
				saveList();
				return;
			}
		}
	}
}
// Save the todo list to a cookie
function saveList() {
  let list = document.getElementById("ft_list");
  document.cookie = "todoList=" + encodeURIComponent(list.innerHTML) + "; max-age=31536000"; // 1 year
}

// Load the todo list from a cookie
function loadList() {
  let list = document.getElementById("ft_list");
  let cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('todoList='))
    .split('=')[1];
  list.innerHTML = decodeURIComponent(cookieValue);
}

// Call loadList when the page is loaded


// Call saveList when a todo item is added or removed
// For example:
// newTodo.onclick = saveList;
// removeButton.onclick = saveList;