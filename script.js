const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
const form = document.getElementById('contact-form');

// menuIcon.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// AOS.init({
//          duration: 1000,
//         once: true,
//     });

document.addEventListener("DOMContentLoaded", function(){
    emailjs.init("biVoV0ngVLFgW30Fj");

    document.getElementById("contact-form").addEventListener("submit", function (event){
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone_number = document.getElementById("phone_number").value;
        let message = document.getElementById("message").value;

        if (!name || !email || !phone_number || !message) {
            alert("Please fill in all fields.");
            return;
        }
        
         emailjs.send("service_bo9uwlm", "template_uf8glxc", {
            name: name,
            email: email,
            phone_number: phone_number,
            message: message
        })
        .then(function(response) {

            // Show success message
            alert("✅ Message sent successfully!");

            // Reset the form correctly
             // FIX: Now "form" is defined above
            //  form.reset();
        })
        .catch(function(error) {
            alert("❌ Failed to send message. Please try again.");
        });
    });
     
});

