document.addEventListener("DOMContentLoaded", function() {
    let user = localStorage.getItem("currentUser");
    let loginBtn = document.getElementById("loginbtn");

    // If someone is logged in, change the button
    if (user !== null && loginBtn) {
        loginBtn.innerHTML = "Hi, " + user + " (Logout)";
        loginBtn.style.backgroundColor = "#E8621F"; // Make it orange
        loginBtn.style.color = "#F8FAFC";
        loginBtn.style.borderColor = "#E8621F";
        
        // Change the button behavior to logout
        loginBtn.href = "#";
        loginBtn.onclick = function(e) {
            e.preventDefault(); 
            logout();
        };
    }
});

function logout() {
    // Check if SweetAlert is loaded on the page
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: "Succesfully Logged Out",
            text: "We are sorry to see you go :(",
            imageUrl: "Pics/images.png ",
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: "Error Mountain"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("currentUser");
                window.location.reload(); 
            }
        });
    } else {
        // Fallback just in case SweetAlert isn't linked on a specific page
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("currentUser");
            window.location.reload(); 
        }
    }
}