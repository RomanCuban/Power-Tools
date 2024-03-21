// Получаем ссылки на элементы
var modal = document.getElementById("myModal");
var toolWrappers = document.querySelectorAll(".tool_wrapper");
var closeBtn = document.querySelector(".close");
var square = document.querySelector(".square");
var toolTitleElement = document.querySelector(".tool-title"); // Находим элемент для отображения названия инструмента
var specTitles = document.querySelectorAll(".with-image"); // Выбираем все элементы с классом .with-image
var specTitles2 = document.querySelectorAll(".with-image-2"); // Выбираем все элементы с классом .with-image-2
var specTitles3 = document.querySelectorAll(".with-image-3"); // Выбираем все элементы с классом .with-image-3
var specTitles4 = document.querySelectorAll(".with-image-4"); // Выбираем все элементы с классом .with-image-4
var specTitles5 = document.querySelectorAll(".with-image-5"); // Выбираем все элементы с классом .with-image-5
var specTitles6 = document.querySelectorAll(".with-image-6"); // Выбираем все элементы с классом .with-image-6

// Для каждого .tool_wrapper добавляем обработчик события
toolWrappers.forEach(function (toolWrapper) {
  toolWrapper.addEventListener("click", function () {
    var imageUrl = toolWrapper.getAttribute("data-image");
    var toolTitle = toolWrapper.querySelector(".text-below").textContent; // Получаем название инструмента
    var specTitle = toolWrapper.getAttribute("data-spec-title"); // Получаем название спецификации
    var specTitle2 = toolWrapper.getAttribute("data-spec-title-2"); // Получаем название спецификации
    var specTitle3 = toolWrapper.getAttribute("data-spec-title-3"); // Получаем название спецификации
    var specTitle4 = toolWrapper.getAttribute("data-spec-title-4"); // Получаем название спецификации
    var specTitle5 = toolWrapper.getAttribute("data-spec-title-5"); // Получаем название спецификации
    var specTitle6 = toolWrapper.getAttribute("data-spec-title-6"); // Получаем название спецификации
    square.style.backgroundImage = "url('" + imageUrl + "')";
    toolTitleElement.textContent = toolTitle; // Устанавливаем название инструмента
    updateSpecs(
      specTitle,
      specTitle2,
      specTitle3,
      specTitle4,
      specTitle5,
      specTitle6
    ); // Вызываем функцию updateSpecs с передачей названия спецификации
    modal.style.display = "block";
  });
});

// Функция для обновления названий спецификаций в модальном окне
function updateSpecs(
  specTitle,
  specTitle2,
  specTitle3,
  specTitle4,
  specTitle5,
  specTitle6
) {
  specTitles.forEach(function (title) {
    title.textContent = specTitle; // Устанавливаем переданное название спецификации
  });
  specTitles2.forEach(function (title) {
    title.textContent = specTitle2; // Устанавливаем переданное название спецификации
  });
  specTitles3.forEach(function (title) {
    title.textContent = specTitle3; // Устанавливаем переданное название спецификации
  });
  specTitles4.forEach(function (title) {
    title.textContent = specTitle4; // Устанавливаем переданное название спецификации
  });
  specTitles5.forEach(function (title) {
    title.textContent = specTitle5; // Устанавливаем переданное название спецификации
  });
  specTitles6.forEach(function (title) {
    title.textContent = specTitle6; // Устанавливаем переданное название спецификации
  });
}

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
