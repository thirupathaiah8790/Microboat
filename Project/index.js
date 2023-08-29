const mobile_nav=document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener('click',() => toggleNavbar());

function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var mobile = document.forms["contactForm"]["mobile"].value;
    var message = document.forms["contactForm"]["message"].value;
    
    if (name === "" || email === "" || mobile === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    
    // Validate email format using a simple regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format");
        return false;
    }
    
    // Validate mobile number format using a simple regular expression
    var mobilePattern = /^\d{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert("Invalid mobile number format. Please enter a 10-digit number.");
        return false;
    }
}