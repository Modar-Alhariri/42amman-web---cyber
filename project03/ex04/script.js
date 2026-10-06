let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let counter = document.getElementById("counter");

let totalTasks = 0;


// Add task using button
addButton.addEventListener("click", function () {
    addTask();
});


// Add task using Enter key
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function addTask() {

    if (taskInput.value === "") {
        return;
    }


    // Create li
    let li = document.createElement("li");

    li.classList.add("task");


    // Create task text
    let taskText = document.createElement("span");

    taskText.textContent = taskInput.value;

    taskText.classList.add("task-text");


    // Mark task as completed
    taskText.addEventListener("click", function () {

        taskText.classList.toggle("completed");

    });


    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-button");


    // Delete task
    deleteButton.addEventListener("click", function () {

        li.remove();

        totalTasks--;

        counter.textContent = totalTasks;

    });


    // Add elements to li
    li.appendChild(taskText);

    li.appendChild(deleteButton);


    // Add li to list
    taskList.appendChild(li);


    // Update counter
    totalTasks++;

    counter.textContent = totalTasks;


    // Clear input
    taskInput.value = "";
}