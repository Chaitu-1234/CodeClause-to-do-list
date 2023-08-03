document.addEventListener("DOMContentLoaded", function () {
  const newTaskInput = document.querySelector("#newtask input");
  const addTaskButton = document.querySelector("#push");
  const tasksContainer = document.querySelector("#tasks");

  addTaskButton.onclick = function () {
    const taskName = newTaskInput.value.trim();
    if (taskName.length === 0) {
      alert("Please Enter a Task");
    } else {
      const timestamp = getCurrentTimestamp();
      const taskElement = createTaskElement(taskName, timestamp);
      tasksContainer.appendChild(taskElement);
      newTaskInput.value = "";
    }
  };

  function createTaskElement(name, timestamp) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
            <span>${name}</span>
            <span class="timestamp">${timestamp}</span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        `;

    taskElement.onclick = function () {
      this.classList.toggle("completed");
    };

    const deleteButton = taskElement.querySelector(".delete");
    deleteButton.onclick = function () {
      taskElement.remove();
    };

    return taskElement;
  }

  function getCurrentTimestamp() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  }
});
