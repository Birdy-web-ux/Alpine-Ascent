function signup() {
    let name = document.getElementById("fullName").value;
    let mail = document.getElementById("emailInput").value;
    let pass = document.getElementById("passwordInput").value;
    let confirmPass = document.getElementById("confirmPassword").value;

    if (name == "" || mail == "" || pass == "" || confirmPass == "") {
        Swal.fire({
            title: "Something went wrong",
            text: "Please fill in every input.",
            imageUrl: "Pics/images.png",
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: "Error Mountain"
        });
    } else if (pass !== confirmPass) {
        Swal.fire({
            title: "Passwords do not match",
            text: "Please make sure both passwords are identical.",
            imageUrl: "Pics/images.png",
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: "Error Mountain"
        });
    } else {
        let newEntry = "Name: " + name + " | Email: " + mail + " | Password: " + pass;
        
        let oldData = localStorage.getItem("allUsers");
        if (oldData == null) {
            localStorage.setItem("allUsers", newEntry);
        } else {
            let combinedData = oldData + "\n" + newEntry;
            localStorage.setItem("allUsers", combinedData);
        }

        // THIS IS THE NEW LINE: Save the current user's name to display on the navbar
        localStorage.setItem("currentUser", name);

        Swal.fire({
            title: "Account Created!",
            text: "Welcome to Alpine Ascents, " + name + ".",
            imageUrl: "Pics/sucess.jpg",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Success Mountain"
        }).then((result) => {
            // Redirect them to the home page after they click OK
            if (result.isConfirmed) {
                window.location.href = "index.html"; 
            }
        });
    }
}