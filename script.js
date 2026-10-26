const button = document.getElementById("btn");
const countText = document.getElementById("count");
let count = 0;

button.addEventListener("click", function () {
 count++;
 countText.textContent = count;
});                         