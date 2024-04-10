console.log("Script loaded");

let currentDate = new Date();
let currentUTCDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0));



function updateCalendar() {
    const currentDateElement = document.getElementById("current-date");
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    currentDateElement.textContent = formattedDate;
}

function generateTimeSlots(currentDate) { // Pass currentDate as a parameter
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
                    let button = document.createElement("button");
                    button.innerText = event.name;
                    button.classList.add("event-button");

                    button.addEventListener('click', () => {
                        window.location.href = "../views/eventDetailsPageBrunoMars2.html";
                    });

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
    generateTimeSlots(currentDate); // Pass currentDate to generateTimeSlots
}

function updateNextDay() {
    currentDate.setDate(currentDate.getDate() + 1);
    updateCalendar();
    generateTimeSlots(currentDate); // Pass currentDate to generateTimeSlots
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
generateTimeSlots(currentDate); // Pass currentDate initially
