import { AddTask, paintCompletedMessageInAllTasks } from "./ui.js";

const AllTaskTrueButton = () => {
  const btn = document.getElementById("allTrue");
  if (btn && btn instanceof HTMLButtonElement) {
    btn.addEventListener("click", () => paintCompletedMessageInAllTasks());
  }
};

AllTaskTrueButton();

const btn = document.getElementById("add");
if (btn && btn instanceof HTMLButtonElement) {
  btn.addEventListener("click", () => AddTask());
}
