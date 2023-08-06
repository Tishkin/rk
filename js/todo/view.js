export default class View {
  constructor(tasks) {
    tasks.forEach((task) => {
      this.renderTask(task);
    });
  };

  // Записываем "input", "form" и "taskList" в свойства объекта "elements"
  elements = {
    input: document.getElementById("newTask"),
    form: document.getElementById("form"),
    tasksList: document.getElementById("tasksList"),
  };

  // Рендер Задач
  renderTask(taskObject) {
    // Если задача выполнена
    const completeClass = '';
    const checked = '';

    if (taskObject.status === "done") {
		completeClass = "completed";
		checked = "checked";
	  };

    // Создание разметки под новую задачу
    const taskHTML = `  <li class="todo-item" data-id="${taskObject.id}">
                                <label class="todo-item-label">
                                    <input class="checkbox" type="checkbox" ${checked} />
                                    <span class="${completeClass}">${taskObject.text}</span>
                                    <button class="btn btn-secondary btn-sm" data-delete>Удалить Задачу</button>
                                </label>
                            </li>`;
    this.elements.tasksList.insertAdjacentHTML("beforeend", taskHTML);
  };

  // Очищение окна ввода задачи
  clearInput() {
    this.elements.input.value = "";
  };

  // Смена статуса задачи "выполнена/не выполнена"
  changeStatus(taskObject) {
    const taskElement = this.elements.tasksList.querySelector(
      `[data-id="${taskObject.id}"]`
    );
    const taskTextEl = taskElement.querySelector("span");

    if (taskObject.status === "done") {
      taskTextEl.classList.add("completed");
    } else {
      taskTextEl.classList.remove("completed");
    };
  };

  // Удаление задачи
  removeTask(taskObject) {
    const taskElement = this.elements.tasksList.querySelector(
      `[data-id="${taskObject.id}"]`
    );
    taskElement.remove();
  };
};
