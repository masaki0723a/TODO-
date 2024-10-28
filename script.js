function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
      alert("タスクを入力してください");
      return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = taskInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.onclick = function () {
      taskList.removeChild(taskItem);
  };

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = ""; // 入力欄をクリア
}
