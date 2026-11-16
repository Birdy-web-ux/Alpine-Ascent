        function login() {
            let mail = document.getElementById("emailInput").value;
            let pass = document.getElementById("passwordInput").value;
            if (mail == "" || pass == "") {
                Swal.fire({
                    title: "Missing Details",
                    text: "Please enter both email and password.",
                    icon: "warning"
                });
                return;
            }
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
            let usersArray = allUsers.split("\n");
            let foundName = null;
            for (let i = 0; i < usersArray.length; i++) {
                let line = usersArray[i];
                let parts = line.split(" | ");

                if (parts.length >= 3) {
                    let savedEmail = parts[1].replace("Email: ", "").trim();
                    let savedPass = parts[2].replace("Password: ", "").trim();
                    let savedName = parts[0].replace("Name: ", "").trim();

                    if (savedEmail === mail && savedPass === pass) {
                        foundName = savedName;
                        break;
                    }
                }
            }
            if (foundName !== null) {
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
                        window.location.href = "index.html";
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