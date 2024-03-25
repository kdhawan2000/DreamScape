function createNavbar() {
    // Create the navbar container
    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add('navbar');

    // Array of icon Unicode characters
    const iconUnicode = ['&#9776;', '&#128197;', '&#128196;', '&#128241;', '&#128187;'];

    // Create navbar icons and append them to the navbar container
    iconUnicode.forEach(unicode => {
        const navbarIcon = document.createElement('div');
        navbarIcon.classList.add('navbar-icon');
        navbarIcon.innerHTML = unicode;
        navbarContainer.appendChild(navbarIcon);
    });

    // Append the navbar container to the body
    document.body.appendChild(navbarContainer);
}

// Call the createNavbar function to generate the navbar
createNavbar();
