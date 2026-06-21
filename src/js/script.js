'use strict';

/* ===================================
   ELEMENTS
=================================== */

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');

const navDashboard = document.getElementById('navDashboard');
const navTasks = document.getElementById('navTasks');
const navAnalytics = document.getElementById('navAnalytics');
const navMessages = document.getElementById('navMessages');
const navSettings = document.getElementById('navSettings');

const dashboardSection = document.getElementById('dashboardSection');
const tasksSection = document.getElementById('tasksSection');
const analyticsSection = document.getElementById('analyticsSection');
const messagesSection = document.getElementById('messagesSection');
const settingsSection = document.getElementById('settingsSection');

/* ===================================
   ALL NAV ITEMS
=================================== */

const navItems = [
    navDashboard,
    navTasks,
    navAnalytics,
    navMessages,
    navSettings
];

/* ===================================
   ALL SECTIONS
=================================== */

const sections = [
    dashboardSection,
    tasksSection,
    analyticsSection,
    messagesSection,
    settingsSection
];

/* ===================================
   MOBILE SIDEBAR
=================================== */

hamburger.addEventListener('click', () => {

    sidebar.classList.add('active');
    overlay.classList.add('active');

});

overlay.addEventListener('click', () => {

    sidebar.classList.remove('active');
    overlay.classList.remove('active');

});

/* ===================================
   REMOVE ACTIVE STATE
=================================== */

function clearActiveMenu() {

    navItems.forEach(item => {
        item.classList.remove('active');
    });

}

/* ===================================
   HIDE ALL SECTIONS
=================================== */

function hideAllSections() {

    sections.forEach(section => {
        section.classList.add('hidden');
    });

}

/* ===================================
   SHOW SECTION
=================================== */

function showSection(section, navItem) {

    hideAllSections();

    clearActiveMenu();

    section.classList.remove('hidden');

    navItem.classList.add('active');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');

}

/* ===================================
   NAVIGATION EVENTS
=================================== */

navDashboard.addEventListener('click', () => {

    showSection(
        dashboardSection,
        navDashboard
    );

});

navTasks.addEventListener('click', () => {

    showSection(
        tasksSection,
        navTasks
    );

});

navAnalytics.addEventListener('click', () => {

    showSection(
        analyticsSection,
        navAnalytics
    );

});

navMessages.addEventListener('click', () => {

    showSection(
        messagesSection,
        navMessages
    );

});

navSettings.addEventListener('click', () => {

    showSection(
        settingsSection,
        navSettings
    );

});

/* ===================================
   DEFAULT PAGE
=================================== */

showSection(
    dashboardSection,
    navDashboard
);
/* ===================================
   ACCOUNT SETUP
=================================== */

const setupScreen =
document.getElementById('setupScreen');

const setupName =
document.getElementById('setupName');

const setupQuote =
document.getElementById('setupQuote');

const setupImage =
document.getElementById('setupImage');

const createAccountBtn =
document.getElementById('createAccountBtn');

const welcomeMessage =
document.getElementById('welcomeMessage');

const profileImage =
document.getElementById('profileImage');

const motivationQuote =
document.getElementById('motivationQuote');

/* ===================================
   CHECK ACCOUNT
=================================== */

checkAccount();

function checkAccount(){

    const savedName =
    localStorage.getItem('userName');

    const savedQuote =
    localStorage.getItem('userQuote');

    const savedImage =
    localStorage.getItem('userImage');

    if(savedName){

        setupScreen.style.display = 'none';

        welcomeMessage.textContent =
        `Welcome Back, ${savedName} 👋`;

        if(savedQuote){

            motivationQuote.textContent =
            savedQuote;

        }

        if(savedImage){

            profileImage.src =
            savedImage;

        }

    }

}

/* ===================================
   CREATE ACCOUNT
=================================== */

createAccountBtn.addEventListener(
'click',
function(){

    const name =
    setupName.value.trim();

    const quote =
    setupQuote.value.trim();

    if(name === ''){

        alert(
            'Please enter your name.'
        );

        return;
    }

    localStorage.setItem(
        'userName',
        name
    );

    localStorage.setItem(
        'userQuote',
        quote
    );

    welcomeMessage.textContent =
    `Welcome Back, ${name} 👋`;

    if(quote){

        motivationQuote.textContent =
        quote;

    }

    const file =
    setupImage.files[0];

    if(file){

        const reader =
        new FileReader();

        reader.onload =
        function(event){

            localStorage.setItem(
                'userImage',
                event.target.result
            );

            profileImage.src =
            event.target.result;

            setupScreen.style.display =
            'none';

        };

        reader.readAsDataURL(file);

    }else{

        setupScreen.style.display =
        'none';

    }

});
const resetAccountBtn =
document.getElementById(
'resetAccountBtn'
);

if(resetAccountBtn){

    resetAccountBtn.addEventListener(
    'click',
    () => {

        localStorage.clear();

        location.reload();

    });

}
/* ===================================
   TASKS
=================================== */

const taskInput =
document.getElementById('taskInput');

const addTaskBtn =
document.getElementById('addTaskBtn');

const taskList =
document.getElementById('taskList');

const taskInputPage =
document.getElementById('taskInputPage');

const addTaskPageBtn =
document.getElementById('addTaskPageBtn');

const taskPageList =
document.getElementById('taskPageList');

/* ===================================
   ANALYTICS
=================================== */

const totalTasks =
document.getElementById('totalTasks');

const completedTasks =
document.getElementById('completedTasks');

const pendingTasks =
document.getElementById('pendingTasks');

const dashboardCompleted =
document.getElementById('dashboardCompleted');

const dashboardPending =
document.getElementById('dashboardPending');

/* ===================================
   TASK STORAGE
=================================== */

let tasks =
JSON.parse(
    localStorage.getItem('tasks')
) || [];

/* ===================================
   SAVE TASKS
=================================== */

function saveTasks(){

    localStorage.setItem(
        'tasks',
        JSON.stringify(tasks)
    );

}

/* ===================================
   UPDATE ANALYTICS
=================================== */

function updateAnalytics(){

    const total =
    tasks.length;

    const completed =
    tasks.filter(
        task => task.completed
    ).length;

    const pending =
    total - completed;

    totalTasks.textContent =
    total;

    completedTasks.textContent =
    completed;

    pendingTasks.textContent =
    pending;

    dashboardCompleted.textContent =
    completed;

    dashboardPending.textContent =
    pending;

}

/* ===================================
   RENDER TASKS
=================================== */

function renderTasks(){

    taskList.innerHTML = '';
    taskPageList.innerHTML = '';

    tasks.forEach((task,index)=>{

        const li1 =
        document.createElement('li');

        li1.className =
        task.completed
        ? 'completed'
        : '';

        li1.innerHTML = `
            <span>${task.text}</span>

            <div>

                <button
                onclick="toggleTask(${index})">
                ✓
                </button>

                <button
                onclick="deleteTask(${index})">
                ✕
                </button>

            </div>
        `;

        const li2 =
        li1.cloneNode(true);

        taskList.appendChild(li1);
        taskPageList.appendChild(li2);

    });

    updateAnalytics();
    saveTasks();

}

/* ===================================
   ADD TASK
=================================== */

function addTask(text){

    if(text.trim() === '') return;

    tasks.push({

        text:text,
        completed:false

    });

    renderTasks();

}

addTaskBtn.addEventListener(
'click',
()=>{
    addTask(taskInput.value);

    taskInput.value='';
});

addTaskPageBtn.addEventListener(
'click',
()=>{
    addTask(taskInputPage.value);

    taskInputPage.value='';
});

/* ===================================
   ENTER KEY
=================================== */

taskInput.addEventListener(
'keypress',
(e)=>{

    if(e.key === 'Enter'){

        addTask(taskInput.value);

        taskInput.value='';

    }

});

taskInputPage.addEventListener(
'keypress',
(e)=>{

    if(e.key === 'Enter'){

        addTask(taskInputPage.value);

        taskInputPage.value='';

    }

});

/* ===================================
   TOGGLE TASK
=================================== */

window.toggleTask =
function(index){

    tasks[index].completed =
    !tasks[index].completed;

    renderTasks();

};

/* ===================================
   DELETE TASK
=================================== */

window.deleteTask =
function(index){

    tasks.splice(index,1);

    renderTasks();

};

/* ===================================
   LOAD TASKS
=================================== */

renderTasks();

/* ===================================
   MESSAGES
=================================== */

const messageInput =
document.getElementById(
'messageInput'
);

const sendMessageBtn =
document.getElementById(
'sendMessageBtn'
);

const messageContainer =
document.getElementById(
'messageContainer'
);

let messages =
JSON.parse(
localStorage.getItem(
'messages'
)
) || [];

function saveMessages(){

    localStorage.setItem(
        'messages',
        JSON.stringify(messages)
    );

}

function renderMessages(){

    messageContainer.innerHTML='';

    messages.forEach(msg=>{

        const div =
        document.createElement(
            'div'
        );

        div.className =
        'message-card';

        div.innerHTML=`

            <strong>
                You
            </strong>

            <p>
                ${msg}
            </p>

        `;

        messageContainer.appendChild(
            div
        );

    });

}

sendMessageBtn.addEventListener(
'click',
()=>{

    const text =
    messageInput.value.trim();

    if(text==='') return;

    messages.push(text);

    saveMessages();

    renderMessages();

    messageInput.value='';

});

renderMessages();

/* ===================================
   SETTINGS
=================================== */

const darkModeToggle =
document.getElementById(
'darkModeToggle'
);

const notificationToggle =
document.getElementById(
'notificationToggle'
);

const autoSaveToggle =
document.getElementById(
'autoSaveToggle'
);

const themeSelect =
document.getElementById(
'themeSelect'
);

const saveSettingsBtn =
document.getElementById(
'saveSettingsBtn'
);

/* ===================================
   LOAD SETTINGS
=================================== */

function loadSettings(){

    const dark =
    localStorage.getItem(
        'darkMode'
    );

    const notify =
    localStorage.getItem(
        'notifications'
    );

    const autosave =
    localStorage.getItem(
        'autoSave'
    );

    const theme =
    localStorage.getItem(
        'theme'
    );

    if(dark === 'true'){

        darkModeToggle.checked =
        true;

        document.body.classList.add(
            'dark-mode'
        );

    }

    if(notify === 'true'){

        notificationToggle.checked =
        true;

    }

    if(autosave === 'true'){

        autoSaveToggle.checked =
        true;

    }

    if(theme){

        themeSelect.value =
        theme;

        applyTheme(theme);

    }

}

/* ===================================
   APPLY THEME
=================================== */

function applyTheme(theme){

    document.body.classList.remove(
        'theme-purple',
        'theme-green'
    );

    if(theme === 'purple'){

        document.body.classList.add(
            'theme-purple'
        );

    }

    if(theme === 'green'){

        document.body.classList.add(
            'theme-green'
        );

    }
}
/*SAVE SETTINGS */
saveSettingsBtn.addEventListener(
'click',
()=>{
    localStorage.setItem(
        'darkMode',
        darkModeToggle.checked
    );

    localStorage.setItem(
        'notifications',
        notificationToggle.checked
    );

    localStorage.setItem(
        'autoSave',
        autoSaveToggle.checked
    );

    localStorage.setItem(
        'theme',
        themeSelect.value
    );

    if(
        darkModeToggle.checked
    ){

        document.body.classList.add(
            'dark-mode'
        );

    }else{

        document.body.classList.remove(
            'dark-mode'
        );

    }

    applyTheme(
        themeSelect.value
    );

    alert(
        'Settings saved successfully.'
    );

});

loadSettings();