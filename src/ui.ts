import { Task } from "./model.js";
import {
  taskList,
  addNewTask,
  updateTaskName,
  changeCheckedToTrue,
  changeAllTaskToTrue,
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

export const AddTask = () => {
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
      li.appendChild(createEditInput(task.id, task.name, task.isCompleted));
      li.appendChild(createCheckBox(task.id, task.isCompleted));
      li.classList.add("task");
      if (task.isCompleted) {
        li.classList.add("message");
      }
      taskListElement.appendChild(li);
    });
  }
};

const createCheckBox = (id: number, isTrue: boolean): HTMLInputElement => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isTrue;
  checkbox.addEventListener("change", () => paintCheckedTasks(id));
  return checkbox;
};

// const createCompletedMessage = () => {
//   taskList.forEach((task) => {
//     const paragraph = document.createElement("p");
//     paragraph.classList.add("message");
//     paragraph.textContent = task.isCompleted
//       ? `${task.name} is completed`
//       : `${task.name} is not completed`;
//     containerList.appendChild(paragraph);
//   });
// };

const createEditInput = (
  id: number,
  name: string,
  completed: boolean
): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = "text";
  input.value = name;
  input.addEventListener("blur", () => paintNewTaskList(id, input.value));
  if (completed) {
    input.classList.add("message");
  }
  return input;
};

// const createSubmitButton = (): HTMLButtonElement => {
//   const btn = document.createElement("button");

//   btn.textContent = "Submit";
//   btn.classList.add("submit");

//   containerList.appendChild(btn);

//   return btn;
// };

const paintNewTaskList = (id: number, value: string) => {
  const newTasks = updateTaskName(id, value);
  createTaskList(newTasks);
};

// const handleTaskEditing = (id: number) => {
//   const input = createEditInput(id);
//   const btn = createSubmitButton();

//   btn.addEventListener("click", () => paintNewTaskList(id, input.value));
// };

// const createEditButton = (index: number): HTMLButtonElement => {
//   const button = document.createElement("button");

//   button.textContent = "Edit task";
//   button.classList.add("edit");

//   button.addEventListener("click", () => handleTaskEditing(index));

//   return button;
// };

const paintCheckedTasks = (id: number) => {
  changeCheckedToTrue(id);
  createTaskList(taskList);
};

export const paintCompletedMessageInAllTasks = () => {
  changeAllTaskToTrue();
  createTaskList(taskList);
};
