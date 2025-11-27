const taskInput = document.getElementById("textInput");
const taskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

taskBtn.addEventListener("click", () => {
    const task = taskInput.value;

    if (task) {
        const newTask = document.createElement("li");
        newTask.textContent = task;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
});
