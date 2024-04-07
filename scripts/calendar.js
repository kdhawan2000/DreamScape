console.log("Script loaded");

let currentDate = new Date();

function updateCalendar() {
    const currentDateElement = document.getElementById("current-date");
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    currentDateElement.textContent = formattedDate;
}

function generateTimeSlots() {
    const timeBody = document.getElementById("time-body");
    timeBody.innerHTML = "";

    for (let i = 0; i < 24; i++) {
        let row = document.createElement("tr");
        let timeSlotCell = document.createElement("td");
        let eventCell = document.createElement("td");

        timeSlotCell.classList.add("time-slot");
        timeSlotCell.innerText = `${String(i).padStart(2, '0')}:00`;

        eventCell.classList.add("event-column", "event-cell");

        // Create a button element
        let button = document.createElement("button");
        button.innerText = "Click me"; // Button text
        button.addEventListener("click", function() {
            alert(`Button ${i} clicked`); // Example action on button click
        });

        // Append the button to the event cell
        eventCell.appendChild(button);

        row.appendChild(timeSlotCell);
        row.appendChild(eventCell);

        timeBody.appendChild(row);
    }
}

function updatePrevDay() {
    currentDate.setDate(currentDate.getDate() - 1);
    updateCalendar();
}

function updateNextDay() {
    currentDate.setDate(currentDate.getDate() + 1);
    updateCalendar();
}

document.getElementById("prev-day").addEventListener("click", updatePrevDay);
document.getElementById("next-day").addEventListener("click", updateNextDay);
document.getElementById("export-button").addEventListener("click", function() {
    alert("Calendar downloaded to device");
});
document.getElementById("done-button").addEventListener("click", function() {
    window.location.href = "../views/homePage.html"; // Go back to Homepage
});

updateCalendar();
generateTimeSlots();
