document.documentElement.style.scrollBehavior = "smooth";
console.log("JamesTech Dashboard Loaded");
// Sidebar Toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});
// To-Do List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
// Load tasks when page opens
document.addEventListener("DOMContentLoaded", loadTasks);
// Add task button
addTaskBtn.addEventListener("click", addTask);
// Enter key support
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
// Add Task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }
    const tasks = getTasks();
    tasks.push({
        text: taskText,
        completed: false
    });
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
    taskInput.value = "";
    loadTasks();
}
// Get Tasks
function getTasks() {
    return JSON.parse(
        localStorage.getItem("tasks")
    ) || [];
}
// Load Tasks
function loadTasks() {
    taskList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
                <button onclick="toggleTask(${index})">
                    ✓
                </button>

                <button onclick="deleteTask(${index})">
                    🗑
                </button>
            </div>
        `;
        taskList.appendChild(li);
    });
}
// Toggle Complete
function toggleTask(index) {
    const tasks = getTasks();
    tasks[index].completed =
        !tasks[index].completed;
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
    loadTasks();
}
// Delete Task
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
    loadTasks();
}