function feedback() {
    let name = document.getElementById("fbName").value;
    let mail = document.getElementById("fbEmail").value;
    let exp = document.getElementById("fbExperience").value;
    let comment = document.getElementById("fbComments").value;

    if (name == "" || mail == "" || exp == "") {
        Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please fill in every input."
        });
    } else {
        localStorage.setItem("fbName", name);
        localStorage.setItem("fbEmail", mail);
        localStorage.setItem("fbExperience", exp);
        localStorage.setItem("fbComments", comment);

        Swal.fire({
            icon: "success",
            title: "Feedback Submitted",
            text: " Thank You your feedback helps us improve, " + name + "."
        });
    }
}