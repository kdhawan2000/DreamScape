function redirectToProfileEditPage() {
    window.location.href = "../views/editProfile.html";
}

function redirectToPaymentsPage() {
    alert("You do not have any saved payment pages! Kindly save a payment method while making a purchase to view them!");
}

function confirmDelete() {
    if (confirm("Are you sure you want to delete your account?")) {
        alert("Account deleted successfully!");
        redirectToHomePage();
    }
}

function updateName() {
    var newName = document.getElementById('nameInput').value;
    localStorage.setItem('name', newName);
    alert('Name updated successfully!');
    // Redirect to the other profile page
    window.location.href = 'profilePage.html';
}

function updateCred() {
    alert('Check your email inbox to continue the change!');
    window.location.href = "../views/profilePage.html";
}