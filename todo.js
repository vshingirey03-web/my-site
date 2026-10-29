const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const text = input.value;

  if (text === "") {
    return;                      // пустую задачу не добавляем
  }

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";              // очищаем поле
});