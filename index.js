var btnAdd = document.getElementById("btnadd");
var toDoContainer = document.getElementById("toDoContainer");
var input = document.getElementById("input");
var btnClear = document.getElementById("btnClear");

btnAdd.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML = input.value;
  input.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.addEventListener("dblclick", function () {
      toDoContainer.removeChild(paragraph);
    });
  });
  btnClear.addEventListener("click", function () {
    paragraph.remove();
  });
});
