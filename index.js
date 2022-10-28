/*=== === === === === === === === ===
~~~~ JavaScript ToDo List Code ~~~~
=== === === === === === === === ===*/

addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("note");
  const button = document.querySelector("[data-submit]");
  const deleteBtn = document.getElementById("delete");
  const editBtn = document.getElementById("edit");
  const text = document.getElementById("text");
  button.addEventListener("click", function (e) {
    e.preventDefault();

    if (textArea.value.length === 0) {
      textArea.style.border = "solid";
      textArea.style.borderWidth = "2px";
      textArea.style.borderColor = "red";
    } else {
      textArea.style.border = "";
      textArea.style.borderWidth = "";
      textArea.style.borderColor = "";
      text.innerText = textArea.value;
      setTimeout(() => {
        textArea.value = "";
      }, 500);
    }

    deleteBtn.addEventListener("click", function () {
      text.innerText = "";
    });
    editBtn.addEventListener("click", function () {
      textArea.value = text.innerText;
    });
  });
});
