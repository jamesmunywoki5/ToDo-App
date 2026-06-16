// User Profile Setup
const setupScreen =
document.getElementById("setupScreen");
const createAccountBtn =
document.getElementById("createAccountBtn");
checkAccount();
function checkAccount(){
    const profile =
    localStorage.getItem("userProfile");
    if(profile){
        setupScreen.classList.add("hidden");
        loadProfile();
    }
}
createAccountBtn.addEventListener("click", () => {
    const name =
    document.getElementById("setupName").value;
    const quote =
    document.getElementById("setupQuote").value;
    const imageFile =
    document.getElementById("setupImage").files[0];
    if(!name){
        alert("Enter your name");
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e){
        const profile = {
            name: name,
            quote: quote,
            image: e.target.result
        };
        localStorage.setItem(
            "userProfile",
            JSON.stringify(profile)
        );
        setupScreen.classList.add("hidden");
        loadProfile();
    };
    if(imageFile){
        reader.readAsDataURL(imageFile);
    }else{
        const profile = {
            name: name,
            quote: quote,
            image: "src/images/profile.png"
        };
        localStorage.setItem(
            "userProfile",
            JSON.stringify(profile)
        );
        setupScreen.classList.add("hidden");
        loadProfile();
    }
});
function loadProfile(){
    const profile =
    JSON.parse(
        localStorage.getItem("userProfile")
    );
    if(!profile) return;
    document.getElementById(
        "welcomeMessage"
    ).textContent =
    `Welcome back, ${profile.name} 👋`;
    document.getElementById(
        "motivationQuote"
    ).textContent =
    profile.quote;
    document.getElementById(
        "profileImage"
    ).src =
    profile.image;
}
// main script
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