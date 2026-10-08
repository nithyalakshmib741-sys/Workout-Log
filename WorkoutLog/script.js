const form = document.getElementById("workoutForm");
const table = document.getElementById("workoutTable");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const exercise = document.getElementById("exercise").value.trim();
    const type = document.getElementById("type").value;
    const date = document.getElementById("date").value;
    const duration = document.getElementById("duration").value;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
    const notes = document.getElementById("notes").value.trim();


    // Form validation

    if (exercise === "") {
        alert("Please enter the exercise name.");
        return;
    }

    if (type === "") {
        alert("Please select the workout type.");
        return;
    }

    if (date === "") {
        alert("Please select the date.");
        return;
    }

    if (duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    if (sets <= 0) {
        alert("Please enter valid sets.");
        return;
    }

    if (reps <= 0) {
        alert("Please enter valid reps.");
        return;
    }


    // Add workout to table

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${exercise}</td>
        <td>${type}</td>
        <td>${date}</td>
        <td>${duration} min</td>
        <td>${sets}</td>
        <td>${reps}</td>
        <td>
            <button class="delete-btn" onclick="deleteWorkout(this)">
                Delete
            </button>
        </td>
    `;

    table.appendChild(row);

    alert("Workout added successfully!");

    form.reset();
});


function deleteWorkout(button) {

    button.parentElement.parentElement.remove();

}