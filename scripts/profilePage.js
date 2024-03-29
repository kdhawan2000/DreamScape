import * as navigation from './navigation.js';

function redirectToProfileEditPage() {
    // window.location.href = "/views/profileEditPage.html";
    alert("This page is under construction. Kindly check back later.");
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