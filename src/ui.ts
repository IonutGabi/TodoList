import { Task } from "./model.js";
import {
  taskList,
  addNewTask,
  updateTaskName,
  changeCheckedToTrue,
  changeAllTaskToTrue,
  deleteTask,
} from "./motor.js";

const getTaskOfInput = (): string => {
  const input = document.getElementById("task");
  let value = "";

  if (input && input instanceof HTMLInputElement) {
    value = input.value;
    input.value = "";
  }
  return value;
};

export const addTask = () => {
  const value = getTaskOfInput();
  addNewTask(value);
  createTaskList(taskList);
};

const createTaskList = (tasks: Task[]) => {
  const taskListElement = document.getElementById("taskList");
  if (taskListElement && taskListElement instanceof HTMLUListElement) {
    taskListElement.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.appendChild(createCheckBox(task.id));
      li.appendChild(createEditInput(task.id, task.name));
      li.appendChild(createDeleteButton(task.id));
      li.classList.add("task");
      taskListElement.appendChild(li);
    });
  }
};

const createCheckBox = (id: number): HTMLInputElement => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => addStyleToTask(id));
  return checkbox;
};

const createEditInput = (id: number, name: string): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = "text";
  input.value = name;
  input.id = `task-${id}`;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      paintNewTaskList(id, input.value);
    }
  });
  return input;
};

const paintNewTaskList = (id: number, value: string) => {
  const newTasks = updateTaskName(id, value);
  createTaskList(newTasks);
};

const addStyleToTask = (id: number) => {
  changeCheckedToTrue(id);
  const input = document.getElementById(`task-${id}`);
  if (input && input instanceof HTMLInputElement) {
    taskList.some((task) => task.id === id && task.isCompleted)
      ? input.classList.add("completed")
      : input.classList.remove("completed");
  }
};

export const updateTaskViewInTheUI = () => {
  changeAllTaskToTrue();
  allTasksTrue();
};

const addClassToInput = (): NodeList => {
  const input = document.querySelectorAll("input[type='text']");
  input.forEach((input) => {
    input.classList.add("completed");
  });
  return input;
};

const removeClassToInput = (): NodeList => {
  const input = document.querySelectorAll("input[type='text']");
  input.forEach((input) => {
    input.classList.remove("completed");
  });
  return input;
};

const addAttributeToCheckbox = (): NodeList => {
  const checkbox = document.querySelectorAll("input[type='checkbox']");
  checkbox.forEach((checkbox) => {
    checkbox.setAttribute("checked", "checked");
  });
  return checkbox;
};

const removeAttributeToCheckbox = (): NodeList => {
  const checkbox = document.querySelectorAll("input[type='checkbox']");
  checkbox.forEach((checkbox) => {
    checkbox.removeAttribute("checked");
  });
  return checkbox;
};
const allTasksTrue = () => {
  const isCompleted = taskList.every((task) => task.isCompleted);
  if (isCompleted) {
    addClassToInput();
    addAttributeToCheckbox();
  } else {
    removeClassToInput();
    removeAttributeToCheckbox();
  }
};

const createDeleteButton = (id: number): HTMLButtonElement => {
  const button = document.createElement("button");
  button.textContent = "❌";
  button.classList.add("delete-btn");
  button.addEventListener("click", () => {
    const updatedTasks = deleteTask(id);
    createTaskList(updatedTasks);
  });
  return button;
};
