// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    // Basic validation
    if (email && password && phone) {
        alert(`Registration successful!\nEmail: ${email}\nPhone: ${phone}`);
        this.reset(); // Reset the form
    } else {
        alert('Please fill out all fields.');
    }
});

// Toggle password visibility
function togglePassword() {
    var passwordField = document.getElementById("password");
    var icon = document.querySelector(".icon-eye");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.textContent = "👁️";  // Update icon when password is visible
    } else {
        passwordField.type = "password";
        icon.textContent = "🙈";  // Change icon when password is hidden
    }
}


