// toggle eye button
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var icon = document.querySelector(".password-toggle-icon i");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function openPopup(event) {
    event.preventDefault(); // Prevent link's default behavior
    document.getElementById('popup').style.display = 'block'; 
  }
  
  function simulateReset() {
    const email = document.getElementById('email').value;
    const message = `Password reset link has been sent to ${email}`;
    console.log("Simulated email message:", message);
  
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      document.getElementById('resetMessage').textContent = message;
      document.getElementById('resetMessage').style.display = 'block';
    } else {
      console.error("Invalid email format");
    }

    setTimeout(closePopup, 3000);
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
  }
  