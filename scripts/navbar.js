function createNavbar(index) {
    // Create the navbar container
    const pageTitle = document.title;
    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add('navbar');

    // Create navbar icons and append them to the navbar container
    navbarItems.forEach(item => {
        const navbarIcon = document.createElement('div');
        navbarIcon.classList.add('navbar-icon');

        // Create Font Awesome icon element
        const iconElement = document.createElement('i');
        iconElement.classList.add(...item.iconName.split(" ")); // Add Font Awesome class and icon name
        navbarIcon.appendChild(iconElement);

        // Add an event listener to navigate to the specified link when the icon is clicked
        navbarIcon.addEventListener('click', () => {
            window.location.href = item.link;
        });

        if(item.pageTitle === pageTitle){
            iconElement.classList.add('current-page'); 
        }

        navbarContainer.appendChild(navbarIcon);
    });

    // Append the navbar container to the body
    document.body.appendChild(navbarContainer);
}

// Example usage with Font Awesome icons
const navbarItems = [
    { pageTitle: 'Home', iconName: 'fa-solid fa-house', link: '../views/homePage.html' }, // Hamburger icon with link #
    { pageTitle: 'Calendar', iconName: 'fa-solid fa-calendar-days', link: '' }, // Home icon with link to home.html
    { pageTitle: 'Search', iconName: 'fa-solid fa-magnifying-glass', link: '../views/searchPage.html' }, // Profile icon with link to profile.html
    { pageTitle: 'Notifications', iconName: 'fa-solid fa-bell', link: '../views/notificationsPage.html' }, // Message icon with link to messages.html
    { pageTitle: 'Profile', iconName: 'fa-solid fa-user', link: '' }, // Settings icon with link to settings.html
];

createNavbar();