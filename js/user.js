// Get the modal element
var userModal = document.getElementById("userModal");

// Get the button that opens the modal
var userBtn = document.querySelector(".user");

// Get the <span> element that closes the modal
var userClose = document.querySelector(".user-close");
// Get the elements
var imageInput = document.getElementById("imageInput");
var userImage = document.getElementById("userImage");
var overlay = document.querySelector(".overlay");
var changeImageButton = document.querySelector(".change-image");
var deleteImageButton = document.querySelector(".delete-image");
// Находим кнопку "Save" в первой модальной форме
var saveButton = document.querySelector(".small-square-save");

// Назначаем обработчик события на нажатие кнопки "Save"
saveButton.addEventListener("click", function () {
  // Показываем уведомление
  var notification = document.getElementById("notification");
  notification.classList.add("show");

  // Закрываем уведомление через 2 секунды (2000 миллисекунд)
  setTimeout(function () {
    notification.classList.remove("show");
  }, 2000);

  // Удаляем элемент с классом "nolist", если он существует
  var nolistElement = document.querySelector(".nolist");
  if (nolistElement) {
    nolistElement.remove();
  }

  // Находим элемент второй модальной формы
  var saveLists = document.querySelector(".save-lists");

  // Создаем элемент <div class="save-instruments">hui</div> и добавляем его во вторую модальную форму
  var newElement = document.createElement("div");
  newElement.textContent = "hui";
  newElement.classList.add("save-instruments"); // Добавляем класс стиля
  saveLists.appendChild(newElement);
});

// Функция для закрытия уведомления
function closeNotification() {
  var notification = document.getElementById("notification");
  notification.classList.remove("show");
}

// Show overlay when hovering over the user profile
document
  .querySelector(".user-profile")
  .addEventListener("mouseenter", function () {
    overlay.style.display = "block";
  });

// Hide overlay when not hovering over the user profile
document
  .querySelector(".user-profile")
  .addEventListener("mouseleave", function () {
    overlay.style.display = "none";
  });

// Change image button click event
changeImageButton.addEventListener("click", function () {
  imageInput.click(); // Trigger the input file dialog
});

// Handle file selection
imageInput.addEventListener("change", function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var newImageSrc = e.target.result;
    userImage.src = newImageSrc; // Обновляем изображение в .user-profile
    userBtn.style.backgroundImage = "url(" + newImageSrc + ")"; // Обновляем фон кнопки .user
  };

  reader.readAsDataURL(file);
});

// Delete image button click event
deleteImageButton.addEventListener("click", function () {
  // Set the src attribute of the user image to the default image
  var defaultImageSrc = "/path/to/default/image.jpg";
  userImage.src = defaultImageSrc;
  userBtn.style.backgroundImage = "url(" + defaultImageSrc + ")"; // Обновляем фон кнопки .user
});

// When the user clicks on the button, open the modal
userBtn.addEventListener("click", function () {
  userModal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
userClose.addEventListener("click", function () {
  userModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == userModal) {
    userModal.style.display = "none";
  }
});
