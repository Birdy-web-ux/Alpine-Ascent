document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("cName").value;
            let data = new FormData(form);
            fetch("https://formspree.io/f/mwlovgnv", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: "Message Sent!",
                        text: "Thank you, " + name + ". We will get back to you soon.",
                        imageUrl: "Pics/sucess.jpg",
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: "Success Mountain"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            form.reset();
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Oops!",
                        text: "There was a problem submitting your form. Please try again.",
                        imageUrl: "Pics/avalanche.svg",
                        imageWidth: 80,
                        imageHeight: 80,
                        imageAlt: "Avalanche"
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: "Network error. Please check your internet connection.",
                        imageUrl: "Pics/avalanche.svg",
                        imageWidth: 80,
                        imageHeight: 80,
                        imageAlt: "Avalanche"
                });
            });
        });
    }
});