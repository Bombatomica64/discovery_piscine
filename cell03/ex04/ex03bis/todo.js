function add() {
	let todo = prompt("Enter new task");

	if (todo === null || todo === ""){
		return;
	}

	let newTodo = $('<div class="todo" onclick="remove(this.textContent)">'+ todo + '</div>');

	$("#ft_list").append(newTodo);
	saveList();
}


function remove(textContent) {
	if (confirm("Are you sure you want to remove this task?"))
	{
		for (let i = 0; i < $("#ft_list").children().length; i++) { 
				if ($("#ft_list").children().eq(i).text() === textContent) {
					$("#ft_list").children().eq(i).remove();
				}
			}
			saveList();
			return;
	}
}

function saveList() {
	document.cookie = "todoList="
	+ encodeURIComponent($("#ft_list").html())
	+ "; max-age=31536000";
}

function loadList() {
    let cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('todoList='));
    if (cookieValue) {
        $("#ft_list").html(decodeURIComponent(cookieValue.split('=')[1]));
    }
}