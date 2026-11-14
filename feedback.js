function feedback() {
    let name = document.getElementById("fbName").value;
    let mail = document.getElementById("fbEmail").value;
    let exp = document.getElementById("fbExperience").value;
    let comment = document.getElementById("fbComments").value;

    if (name == "" || mail == "" || exp == "") {
        Swal.fire({
            title: "Something went wrong",
            text: "Please fill in every input.",
            imageUrl: "Pics/images.png ",
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: "Error Mountain"
        });
    } else {

        let newEntry = "Name: " + name + " | Email: " + mail + " | Exp: " + exp + " | Comment: " + comment;
        
        let oldData = localStorage.getItem("allFeedback");

        if (oldData == null) {
            localStorage.setItem("allFeedback", newEntry);
        } else {
            let combinedData = oldData + "\n" + newEntry;
            localStorage.setItem("allFeedback", combinedData);
        }
        Swal.fire({
            title: "Feedback Submitted",
            text: "Thank you, your feedback helps us improve, " + name + ".",
            imageUrl: "Pics/sucess.jpg", // <-- PUT YOUR IMAGE PATH HERE
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Success Mountain"
        });
    }
}