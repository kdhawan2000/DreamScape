document.querySelector('.price-sort').addEventListener('click', function () {
    const sortDirection = this.getAttribute('data-sort');
    const icon = this.querySelector('i');

    if (sortDirection === 'asc') {
        icon.classList.remove('fa-sort-up');
        icon.classList.add('fa-sort-down');
        this.setAttribute('data-sort', 'desc');
    } else {
        icon.classList.remove('fa-sort-down');
        icon.classList.add('fa-sort-up');
        this.setAttribute('data-sort', 'asc');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const minimizeDistance = document.getElementById("minimizeDistance");
    const slidersControl = document.querySelector(".distance_sliders_control");
    const formControl = document.querySelector(".distance_form_control");

    minimizeDistance.addEventListener("click", function () {
        slidersControl.classList.toggle("hidden");
        formControl.classList.toggle("hidden");
        minimizeDistance.textContent = slidersControl.classList.contains("hidden") ? "+" : "-";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const minimizeDistance = document.getElementById("minimizePrice");
    const slidersControl = document.querySelector(".price_sliders_control");
    const formControl = document.querySelector(".price_form_control");

    minimizeDistance.addEventListener("click", function () {
        slidersControl.classList.toggle("hidden");
        formControl.classList.toggle("hidden");
        minimizeDistance.textContent = slidersControl.classList.contains("hidden") ? "+" : "-";
    });
});


const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
const overlay = document.getElementById("overlay");
console.log(filterPopup);
console.log(overlay);

filterBtn.addEventListener('click', () => {
    filterPopup.classList.toggle('active');
    overlay.classList.toggle("active");
});

function closeFilter() {
    filterPopup.classList.remove('active');
    overlay.classList.remove("active");
}

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromInput.value = from;
    }
}

function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
        toSlider.value = from;
    }
}

function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
to right,
${sliderColor} 0%,
${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
        toSlider.style.zIndex = 2;
    } else {
        toSlider.style.zIndex = 0;
    }
}


const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

const fromSlider2 = document.querySelector('#fromSlider2');
const toSlider2 = document.querySelector('#toSlider2');
const fromInput2 = document.querySelector('#fromInput2');
const toInput2 = document.querySelector('#toInput2');
fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#25daa5', toSlider2);
setToggleAccessible(toSlider2);

fromSlider2.oninput = () => controlFromSlider(fromSlider2, toSlider2, fromInput2);
toSlider2.oninput = () => controlToSlider(fromSlider2, toSlider2, toInput2);
fromInput2.oninput = () => controlFromInput(fromSlider2, fromInput2, toInput2, toSlider2);
toInput2.oninput = () => controlToInput(toSlider2, fromInput2, toInput2, toSlider2);

// Sample JSON data
const eventData1 = [
    {
        "day": "25",
        "month": "JUN",
        "title": "Bruno Mars Eras Tour",
        "dateTime": "Tue, Jun 25 - 7:00 PM",
        "address": "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
        "description": "Get ready for an electrifying night with Bruno Mars! Feel the groove, dance to the hits, and experience unforgettable energy live in Saddledome.",
        "price": "$30.00 CAD",
        "imageSrc": "../assets/Bruno Mars Square.png"
    },
    {
        "day": "25",
        "month": "JUN",
        "title": "Journey World Tour",
        "dateTime": "Tue, Jun 25 - 7:00 PM",
        "address": "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
        "description": "Get ready for an electrifying night with Bruno Mars! Feel the groove, dance to the hits, and experience unforgettable energy live in Saddledome.",
        "price": "$30.00 CAD",
        "imageSrc": "../assets/Joryney Square.png"
    },
    {
        "day": "25",
        "month": "JUN",
        "title": "Taylor Swift Eras Tour",
        "dateTime": "Tue, Jun 25 - 7:00 PM",
        "address": "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
        "description": "Get ready for an electrifying night with Bruno Mars! Feel the groove, dance to the hits, and experience unforgettable energy live in Saddledome.",
        "price": "$30.00 CAD",
        "imageSrc": "../assets/Talor Swift Square.png"
    }
];

// Sample JSON data
const eventData2 = [
    {
        "day": "25",
        "month": "JUN",
        "title": "Journey World Tour",
        "dateTime": "Tue, Jun 25 - 7:00 PM",
        "address": "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
        "description": "Get ready for an electrifying night with Bruno Mars! Feel the groove, dance to the hits, and experience unforgettable energy live in Saddledome.",
        "price": "$30.00 CAD",
        "imageSrc": "../assets/Joryney Square.png"
    },
    {
        "day": "25",
        "month": "JUN",
        "title": "Taylor Swift Eras Tour",
        "dateTime": "Tue, Jun 25 - 7:00 PM",
        "address": "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
        "description": "Get ready for an electrifying night with Bruno Mars! Feel the groove, dance to the hits, and experience unforgettable energy live in Saddledome.",
        "price": "$30.00 CAD",
        "imageSrc": "../assets/Talor Swift Square.png"
    },
    {
        "day": "25",
        "month": "JUN",
        "title": "Bruno Mars Eras Tour",
        "dateTime": "Tue, Jun 25 - 7:00 PM",
        "address": "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
        "description": "Get ready for an electrifying night with Bruno Mars! Feel the groove, dance to the hits, and experience unforgettable energy live in Saddledome.",
        "price": "$30.00 CAD",
        "imageSrc": "../assets/Bruno Mars Square.png"
    }
];

// Function to generate and populate the events container
function generateEvents(eventData) {
    const eventsContainer = document.querySelector('.events-container');

    // Clear existing content in the events container
    eventsContainer.innerHTML = '';

    // Loop through event data and create event cards
    eventData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
        <div class="event-date-container">
          <p class="day">${event.day}</p>
          <p class="month">${event.month}</p>
        </div>
        <div class="event-information-container">
          <p class="event-title">${event.title}</p>
          <p class="event-date-time">${event.dateTime}</p>
          <p class="event-address">${event.address}</p>
          <p class="event-description">${event.description}</p>
          <p class="event-price"><span>${event.price}</span> /Person</p>
        </div>
        <div class="event-image-container">
          <img class="event-image" src="${event.imageSrc}" alt="Event Image">
        </div>
      `;

        eventsContainer.appendChild(eventCard);

        // Add a horizontal line after each event card
        const hr = document.createElement('hr');
        eventsContainer.appendChild(hr);
    });
}

let sort = false;

