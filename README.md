# JamesTech ToDo App

A modern responsive productivity dashboard built with HTML, CSS, and JavaScript. The application provides task management, analytics tracking, user profile customization, messaging, settings management, and persistent local storage.

## Features

### User Account Setup

* Create a personal account
* Upload a profile image
* Add a custom motivational quote
* Automatic profile persistence using Local Storage
* Reset account functionality

### Dashboard

* Welcome message personalized for each user
* Productivity overview
* Dynamic task statistics
* Weekly progress indicator
* Motivation card
* Recent activity section

### Task Management

* Add tasks
* Complete tasks
* Delete tasks
* Real-time task updates
* Task persistence using Local Storage
* Separate task management page

### Analytics

* Total tasks count
* Completed tasks count
* Pending tasks count
* Productivity percentage
* Automatically calculated statistics
* Dynamic progress tracking

### Messages

* Send personal messages
* Persistent message storage
* Message history display

### Settings

* Dark mode toggle
* Notification settings
* Auto-save settings
* Theme selection
* Persistent user preferences

### Themes

Available themes:

* Blue (Default)
* Purple
* Green

### Responsive Design

* Desktop optimized layout
* Tablet support
* Mobile support
* Collapsible sidebar navigation
* Mobile hamburger menu

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Local Storage API
* Glassmorphism Design
* Responsive Design Principles

## Project Structure

```text
JamesTech-Dashboard/
│
├── index.html
│
├── src/
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│       └── profile.png
│
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/jamestech-dashboard.git
```

2. Open the project folder

```bash
cd jamestech-dashboard
```

3. Run the application

Simply open:

```text
index.html
```

in your browser.

No server installation is required.

## Usage

### Creating an Account

1. Enter your name
2. Enter a motivational quote
3. Upload a profile image
4. Click Create Account

### Managing Tasks

1. Navigate to Tasks
2. Enter a task
3. Click Add Task
4. Mark tasks complete
5. Delete tasks when necessary

### Using Analytics

Analytics update automatically based on:

* Completed tasks
* Pending tasks
* Total tasks
* Productivity percentage

### Managing Settings

Navigate to Settings and:

* Enable Dark Mode
* Configure Notifications
* Enable Auto Save
* Select a Theme
* Save Preferences

### Resetting Account

Use the Reset Account button to:

* Clear user profile
* Remove tasks
* Remove messages
* Remove settings
* Restart onboarding

## Local Storage Keys

The application stores data using:

```javascript
userName
userQuote
userImage

tasks

messages

darkMode
notifications
autoSave
theme
```

## Future Improvements

* Firebase Authentication
* MySQL Database Integration
* Cloud Synchronization
* Chart.js Analytics
* Drag and Drop Tasks
* Task Due Dates
* Calendar View
* Push Notifications
* Progressive Web App (PWA)
* Multi-user Support
* Export Reports
* Task Categories
* Search Functionality

## Screenshots

Recommended screenshots:

* Dashboard Overview
* Tasks Page
* Analytics Page
* Messages Page
* Settings Page
* Mobile Responsive Layout

## Author

James Nzolya

Mathematics and Computer Science Student

Web Developer | Software Developer | Database Enthusiast

## License

This project is available for educational, portfolio, and personal use.

---

Built with HTML, CSS, and JavaScript.
