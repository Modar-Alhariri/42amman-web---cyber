const title = document.getElementById("title");
const message = document.querySelector(".message");
const button = document.getElementById("activate");

button.addEventListener("click", function () {
    title.textContent = " Activated";

    message.textContent = "The DOM has been updated.";

    title.style.color = "blue";

    title.classList.add("active");
});