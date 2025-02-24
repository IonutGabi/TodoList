import { Task, tasks } from "./model";

export let taskList: Task[] = tasks;

export const searchTasksToFalse = (): Task[] => {
  return taskList.filter((task) => task.isCompleted === false);
};

export const updateCheckedProperty = (id: number, newTasks: Task[]): Task[] => {
  const modifyTask = newTasks.map((task) =>
    task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  );
  console.log(modifyTask);
  return modifyTask;
};

export const addNewTask = (value: string): void => {
  const addTask: Task[] = [
    { id: taskList.length + 1, name: value, isCompleted: false },
  ];

  taskList = [...taskList, ...addTask];
};

export const changeAllTaskToTrue = () => {
  taskList = taskList.map((task) => ({ ...task, checked: !task.isCompleted }));
};

export const changeCheckedToTrue = (id: number) => {
  const selectedTask = searchTasksToFalse();

  updateCheckedProperty(id, selectedTask);
};

export const updateTaskName = (id: number, value: string): Task[] => {
  const modifyTask = taskList.map((task) =>
    task.id === id ? { ...task, name: value } : task
  );
  return modifyTask;
};
