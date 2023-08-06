export default class Model {
  constructor() {
    this.tasks = [];
    this.loadFromLocalStorage();
  };

  //   Загрузка из "ЛокалСторедж"
  loadFromLocalStorage() {
    const data = localStorage.getItem("tasks");
    if (data) {
      this.tasks = JSON.parse(data);
    };
  };

  //   Сохранение в "ЛокалСторедж"
  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  };

  //   Добавление задачи
  addTask(text) {
    let id = 1;

    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1]["id"] + 1;
    };

    const newTask = {
      id: id,
      status: "active",
      text: text,
    };

    this.tasks.push(newTask);
    this.saveToLocalStorage();

    return newTask;
  };

  //   Поиск задачи по "id"
  findTask(id) {
    const task = this.tasks.find(function (task) {
      if (task.id === parseInt(id)) {
        return true;
      };
    });
    return task;
  };

  //   Смена статуса задачи
  changeStatus(task) {
    if (task.status === "active") {
      task.status = "done";
    } else {
      task.status = "active";
    };

    this.saveToLocalStorage();
  };

  //   Удаление задачи
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  };
};
