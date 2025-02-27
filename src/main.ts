import { addTask, updateTaskViewInTheUI } from "./ui.js";

const AllTaskTrueButton = () => {
  const btn = document.getElementById("allTrue");
  if (btn && btn instanceof HTMLButtonElement) {
    btn.addEventListener("click", () => updateTaskViewInTheUI());
  }
};

AllTaskTrueButton();

const btn = document.getElementById("add");
if (btn && btn instanceof HTMLButtonElement) {
  btn.addEventListener("click", () => addTask());
}

const input = document.getElementById("task");
if (input && input instanceof HTMLInputElement) {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
}
