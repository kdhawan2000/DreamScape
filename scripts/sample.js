function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.add('visible');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('visible');
    }
}
