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

        const currentTimeString = `${String(i).padStart(2, '0')}:00`;

        fetch('../user-database/events.json')
            .then(response => response.json())
            .then(data => {
                const currentDateISOString = currentDate.toISOString().split('T')[0];
                const event = data.find(event => event.date === currentDateISOString && event.start_time === currentTimeString);

                if (event) {
                    // Create a button element with event name as text
                    let button = document.createElement("button");
                    button.innerText = event.name; // Event name as button text
                    button.classList.add("event-button"); // Add event-button class

                    button.addEventListener("click", function() {
                        alert(`Event Name: ${event.name}\nEvent Info: ${event.info}`); // Display event info on button click
                    });

                    // Append the button to the event cell
                    eventCell.appendChild(button);
                }
            })
            .catch(error => console.error('Error:', error));

        row.appendChild(timeSlotCell);
        row.appendChild(eventCell);

        timeBody.appendChild(row);
    }
}

function updatePrevDay() {
    currentDate.setDate(currentDate.getDate() - 1);
    updateCalendar();
    generateTimeSlots();
}

function updateNextDay() {
    currentDate.setDate(currentDate.getDate() + 1);
    updateCalendar();
    generateTimeSlots();
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
