document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  form.addEventListener("submit", e => {
    e.preventDefault();
    myTodos(input.value);
    input.value = "";
  });
});

function myTodos(todo) {
  const myList = document.getElementById("tasks");
  const btn = document.createElement("button");
  const listItem = document.createElement("li");
  btn.textContent = " X ";
  listItem.textContent = ` ${todo} `;
  listItem.appendChild(btn);
  myList.appendChild(listItem);

 btn.addEventListener("click", deleteTask);
}

// delet element function
function deleteTask(e) {
  e.target.parentNode.remove();
}




 