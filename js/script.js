// Side Nav

function openNav() {
    document.getElementById("mySidenav").classList.add('sidenav-open');
}
  
function closeNav() {
    document.getElementById("mySidenav").classList.remove('sidenav-open');
}

// Modal

const modal = document.getElementById("customModal");

const btn = document.getElementById("openModal");

const span = document.getElementsByClassName("closeModal")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Home button clears local storage

function homeBtn() {
  localStorage.clear();
}


// User name output on navbar on mainPage.html

function nameInput() {
  let name = document.getElementById("nameInput").value;
  
  if (name === "") {
    alert("Please enter your name.");
  } else {
    localStorage.setItem("name", name);
    window.location.href = "mainPage.html";
    greetingDiv.innerHTML = "Welcome, " + name + ":)";
  }
}

let name = localStorage.getItem("name");
let greetingDiv = document.getElementById("nameOutput");

if (name === null || name === "") {
  greetingDiv.innerHTML = "Please enter your name.";
} else {
  greetingDiv.innerHTML = "Welcome, " + name + "! :)";
}


// adding task to the to-do list

const btnSubmitTask = document.getElementById("btnSubmitTask");

let taskCounter = 0;

let textDisplayNoTask = document.getElementById("noTasks");

let textDisplayWithTask = document.getElementById("hereToDo");


function submitTask() {
  console.log("Task Submitted"); // added to check if function was called
  let newListedTask = document.getElementById("newTaskInput").value;
  let newItem = document.getElementById("listedTask");
  const listedDiv = document.createElement("li");
  taskCounter++;


    if (newListedTask === "") {
     alert("Please enter a task.");
    } else {
    textDisplayWithTask.innerHTML = `<span class="spanTaskList">Here’s your To-Do List:</span>`
    textDisplayNoTask.style.display = "none";
    listedDiv.innerHTML = `<div id="task-${taskCounter}" class="taskItem d-flex align-content-center taskItemListed">
    <div style="flex: 10%;  word-wrap: break-word;">
      <button class="taskCheckBox" onclick="taskDoneOnClick(${taskCounter})"><i class="fa-solid fa-check" id="check-${taskCounter}" style="display: none"></i></button>
    </div>
    <div class="d-flex align-content-center justify-content-start flex-wrap h-100" style="flex: 80%">
      <span style="color: #000000; margin-left: 15px;" id="lineThrough-${taskCounter}">
        ${newListedTask}
      </span>
    </div>
    <div class="d-flex align-contents-center justify-content-end flex-wrap h-100" style="flex: 10%;">
      <button class="deleteBtn"><i class="fa-solid fa-trash" onclick="deleteItem(${taskCounter})"></i></button>
    </div>            
  </div>`;
    modal.style.display = "none"; 
  }


  const itemList = document.getElementById("itemList");
  itemList.appendChild(listedDiv);
  document.getElementById("newTaskInput").value = "";
}

// Delete Task

function deleteItem() {
  let itemList = document.getElementsByClassName("taskItemListed");
  itemList[0].remove();
}

// Task Done

function taskDoneOnClick(num) {

  console.log(num);
  let taskID = `task-${num}`;
  console.log(taskID);
  let taskItem = document.getElementById(taskID);
  console.log(taskItem);


  let taskCheckBox = document.getElementById(`check-${num}`);
  console.log(taskCheckBox); 

  let lineThrough = document.getElementById(`lineThrough-${num}`);

  taskCheckBox.style.display = "block";
  taskItem.style.backgroundColor = "#97AA52";
  
  
  lineThrough.style.textDecoration  = "line-through";

  console.log("Task Done"); // added to check if function was called

}

