const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function addTask() {
  const text = input.value;

  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove();
  });
  li.appendChild(deleteBtn);

  list.appendChild(li);
  input.value = "";
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});