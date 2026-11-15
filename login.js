        function login() {
            let mail = document.getElementById("emailInput").value;
            let pass = document.getElementById("passwordInput").value;

            // 1. Check for empty fields
            if (mail == "" || pass == "") {
                Swal.fire({
                    title: "Missing Details",
                    text: "Please enter both email and password.",
                    icon: "warning"
                });
                return;
            }

            // 2. Get users from localStorage
            let allUsers = localStorage.getItem("allUsers");

            if (allUsers == null) {
                Swal.fire({
                    title: "No Account Found",
                    text: "Please sign up first.",
                    imageUrl: "Pics/images.png",
                    imageWidth: 80,
                    imageHeight: 80
                });
                return;
            }

            // 3. Split the data by newlines to get individual users
            let usersArray = allUsers.split("\n");
            let foundName = null;

            // 4. Loop through users to find a match
            for (let i = 0; i < usersArray.length; i++) {
                let line = usersArray[i];
                let parts = line.split(" | "); // Splits: "Name: X", "Email: Y", "Password: Z"

                if (parts.length >= 3) {
                    let savedEmail = parts[1].replace("Email: ", "").trim();
                    let savedPass = parts[2].replace("Password: ", "").trim();
                    let savedName = parts[0].replace("Name: ", "").trim();

                    if (savedEmail === mail && savedPass === pass) {
                        foundName = savedName;
                        break; // Stop looping, we found them!
                    }
                }
            }

            // 5. Show success or error
            if (foundName !== null) {
                // Save current user to show on navbar
                localStorage.setItem("currentUser", foundName);

                Swal.fire({
                    title: "Login Successful",
                    text: "Welcome back, " + foundName + ".",
                    imageUrl: "Pics/sucess.jpg",
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: "Success Mountain"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "index.html"; // Redirect to home
                    }
                });
            } else {
                Swal.fire({
                    title: "Invalid Credentials",
                    text: "Incorrect email or password. Please try again.",
                    imageUrl: "Pics/images.png",
                    imageWidth: 80,
                    imageHeight: 80
                });
            }
        }