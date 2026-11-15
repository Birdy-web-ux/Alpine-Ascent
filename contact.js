document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Stops the page from refreshing

            let name = document.getElementById("cName").value;
            let data = new FormData(form); // Grabs all the form data (name, email, subject, message)

            // Send to your Formspree endpoint
            fetch("https://formspree.io/f/mwlovgnv", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // SUCCESS POPUP
                    Swal.fire({
                        title: "Message Sent!",
                        text: "Thank you, " + name + ". We will get back to you soon.",
                        imageUrl: "Pics/sucess.jpg",
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: "Success Mountain"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            form.reset(); // Clears the form fields after they click OK
                        }
                    });
                } else {
                    // ERROR POPUP (If Formspree is down or form is not confirmed)
                    Swal.fire({
                        title: "Oops!",
                        text: "There was a problem submitting your form. Please try again.",
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
        });
    }
});