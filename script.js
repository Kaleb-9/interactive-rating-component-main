const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const goBack = document.getElementById("goback");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");
});

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML;
    });
});

goBack.addEventListener("click", () => {
    mainContainer.style.display = "block";
    thanksContainer.classList.add("hidden");
});
