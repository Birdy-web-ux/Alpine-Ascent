function feedback() {
    let name = document.getElementById("fbName").value;
    let mail = document.getElementById("fbEmail").value;
    let exp = document.getElementById("fbExperience").value;
    let comment = document.getElementById("fbComments").value;

    if (name == "" || mail == "" || exp == "") {
        Swal.fire({
            title: "Something went wrong",
            text: "Please fill in every input.",
            imageUrl: "Pics/images.png", 
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: "Error Mountain"
        });
        return; // Stops the function here if inputs are empty
    }

    // 1. Manually package the data for Formspree
    let formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", mail);
    formData.append("Experience", exp);
    formData.append("Comments", comment);

    // 2. Send to your Formspree email endpoint
    fetch("https://formspree.io/f/mwlovgnv", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // SUCCESS POPUP
            Swal.fire({
                title: "Feedback Submitted",
                text: "Thank you, your feedback helps us improve, " + name + ".",
                imageUrl: "Pics/sucess.jpg", 
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: "Success Mountain"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Clear the form after they click OK
                    document.getElementById("fbName").value = "";
                    document.getElementById("fbEmail").value = "";
                    document.getElementById("fbComments").value = "";
                    
                    // Reset the dropdown text (if you have a custom JS dropdown)
                    if(document.getElementById("fbExperienceBtn")) {
                        document.getElementById("fbExperienceBtn").innerHTML = "Your Experience";
                        document.getElementById("fbExperienceBtn").classList.remove("has-value");
                    }
                }
            });
        } else {
            // ERROR POPUP
            Swal.fire({
                title: "Oops!",
                text: "There was a problem submitting your feedback. Please try again.",
                icon: "error"
            });
        }
    })
    .catch(error => {
        // NETWORK ERROR POPUP
        Swal.fire({
            title: "Error",
            text: "Network error. Please check your internet connection.",
            icon: "error"
        });
    });
}