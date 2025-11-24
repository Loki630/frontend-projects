const taskContainer = document.querySelector(".main-tasks");
const addTaskbtn = document.querySelector('.add-task-btn');
const addTaskPopup = document.querySelector('.task-popup-container');
const closePopup = document.querySelector('.close-popup');
const form = document.querySelector(".task-details")
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const introText = document.querySelector('.intro-text');

form.addEventListener("submit", function(e){
    addTaskPopup.classList.remove('active');
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const dateText = dateInput.value.trim()

    if (taskText === ""){
        return
    }

    addTask(taskText,dateText);
    taskInput.value = "";
})

addTaskbtn.onclick = () => {
    addTaskPopup.classList.add('active');
}

closePopup.onclick = () => {
    addTaskPopup.classList.remove('active');
}




function addTask(text,taskDate){
    const card = document.createElement('div');
    card.className = "task-card";

    card.innerHTML = `
        <div class="task-content">
            <div class = "task-text">
                <span class = "task">${text}</span>
                <span class = "task" style = "font-size: 18px;">Due by :${taskDate}</span>
            </div>
            <div class="btn-grp">
                <button class="finish">✔️</button>
                <button class="delete" onclick = "deleteTask()">❌</button>
            </div>
        </div>
    `;

    taskContainer.appendChild(card);
    introText.innerText = "Tasks:";
    introText.classList.remove("active");
}

taskContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
        const card = e.target.closest('.task-card');
        card.remove();
    }

    if(e.target.classList.contains("finish")){
        const taskText = e.target.closest(".task-content");
        taskText.classList.add("active");
    }
    if (taskContainer.querySelector(".task-card") == null){
        introText.innerText = "No Tasks";
        introText.classList.add("active");
    }
    
});
