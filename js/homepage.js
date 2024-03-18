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

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
  updateDots();
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

// Создаем круглые индикаторы для слайдов
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

showSlide(currentSlide);
