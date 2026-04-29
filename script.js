function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.innerText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingElement.innerText = "Good Afternoon!";
    } else {
        greetingElement.innerText = "Good Evening!";
    }
}

setGreeting();

const quotes = [
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only bad workout is the one that didn't happen.",
    "Small steps in the right direction can turn out to be the biggest step of your life."
];

const quoteButton = document.getElementById('quote-btn');
const quoteText = document.getElementById('quote-text');

quoteButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
});

const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please type a task first!");
        return; 
    }

    const newListItem = document.createElement('li');
    newListItem.innerText = taskText;

    newListItem.addEventListener('click', function() {
        newListItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        newListItem.remove();
    });

    newListItem.appendChild(deleteBtn);
    taskList.appendChild(newListItem);

    taskInput.value = "";
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});