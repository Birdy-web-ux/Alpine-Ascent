
// Select all stars
const stars = document.querySelectorAll(".star");

let selectedRating = 0;

// Star Rating System
stars.forEach(function(star) {

    star.addEventListener("click", function() {

        selectedRating = Number(this.dataset.value);

        stars.forEach(function(item) {
            const value = Number(item.dataset.value);

            if (value <= selectedRating) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }
        });

        document.getElementById("ratingText").textContent =
            selectedRating + " out of 5 Stars";

    });

});


// Character Counter
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("input", function() {

    charCount.textContent =
        message.value.length + " / 500 characters";

});


// Feedback Form Submission
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (selectedRating === 0) {
        alert("Please select a star rating!");
        return;
    }

    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const successMessage =
        document.getElementById("successMessage");

    successMessage.textContent =
        "Thank you " + name +
        "! Your feedback has been submitted successfully.";

    console.log("Feedback Details:");
    console.log("Name:", name);
    console.log("Email:", document.getElementById("email").value);
    console.log("Rating:", selectedRating);
    console.log("Category:", category);
    console.log("Message:", message.value);

    form.reset();

    stars.forEach(function(star) {
        star.classList.remove("selected");
    });

    selectedRating = 0;

    document.getElementById("ratingText").textContent =
        "Select your rating";

    charCount.textContent = "0 / 500 characters";

});
