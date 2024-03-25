function createNavbar(navbarItems) {
    // Create the navbar container
    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add('navbar');
  
    // Create navbar icons and append them to the navbar container
    navbarItems.forEach(item => {
      const navbarIcon = document.createElement('div');
      navbarIcon.classList.add('navbar-icon');
  
      // Create Font Awesome icon element
      const iconElement = document.createElement('i');
      iconElement.classList.add('fas', item.iconName); // Add Font Awesome class and icon name
      navbarIcon.appendChild(iconElement);
  
      // Add an event listener to navigate to the specified link when the icon is clicked
      navbarIcon.addEventListener('click', () => {
        window.location.href = item.link;
      });
  
      navbarContainer.appendChild(navbarIcon);
    });
  
    // Append the navbar container to the body
    document.body.appendChild(navbarContainer);
  }
  
  // Example usage with Font Awesome icons
  const navbarItems = [
    { iconName: 'fa-bars', link: '#' }, // Hamburger icon with link #
    { iconName: 'fa-home', link: 'home.html' }, // Home icon with link to home.html
    { iconName: 'fa-user', link: 'profile.html' }, // Profile icon with link to profile.html
    { iconName: 'fa-envelope', link: 'messages.html' }, // Message icon with link to messages.html
    { iconName: 'fa-cog', link: 'settings.html' }, // Settings icon with link to settings.html
  ];
  
  // Call the createNavbar function with the array of navbar items
  createNavbar(navbarItems);
  