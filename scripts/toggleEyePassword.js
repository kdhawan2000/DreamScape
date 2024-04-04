// toggle eye button
function togglePasswordVisibility(icon) {
  var passwordField = icon.previousElementSibling; 
  var eyeIcon = icon.querySelector("i"); 

  if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
  } else {
      passwordField.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
  }
}
function openPopup() {
  document.getElementById('popup').style.display = 'block'; 
}

function simulateReset() {
  var email = document.getElementById('email').value; // Use 'var' instead of 'const'
  var message = `Password reset link has been sent to ${email}`;
  console.log("Simulated email message:", message);

  // Basic email validation using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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


  