// Получаем ссылки на элементы
var modal = document.getElementById("myModal");
var toolWrappers = document.querySelectorAll(".tool_wrapper");
var closeBtn = document.querySelector(".close");
var square = document.querySelector(".square");
var toolTitleElement = document.querySelector(".tool-title"); // Находим элемент для отображения названия инструмента

// Для каждого .tool_wrapper добавляем обработчик события
toolWrappers.forEach(function (toolWrapper) {
  toolWrapper.addEventListener("click", function () {
    var imageUrl = toolWrapper.getAttribute("data-image");
    var toolTitle = toolWrapper.querySelector(".text-below").textContent; // Получаем название инструмента
    square.style.backgroundImage = "url('" + imageUrl + "')";
    toolTitleElement.textContent = toolTitle; // Устанавливаем название инструмента
    modal.style.display = "block";
  });
});

// Когда пользователь нажимает на крестик, модальное окно закрывается
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Если пользователь нажимает вне модального окна, оно тоже закрывается
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
