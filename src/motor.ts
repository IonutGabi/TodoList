import { Task, tasks } from "./model";

export let taskList: Task[] = tasks;

export const changeIsCompletedProperty = (
  id: number,
  newTaskList: Task[]
): Task[] => {
  taskList = newTaskList.map((task) =>
    task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  );
  console.log(taskList);
  return taskList;
};

export const addNewTask = (value: string): void => {
  const addTask: Task[] = [
    { id: taskList.length + 1, name: value, isCompleted: false },
  ];

  taskList = [...taskList, ...addTask];
};

export const changeAllTaskToTrue = () => {
  taskList = taskList.map((task) => ({
    ...task,
    isCompleted: !task.isCompleted,
  }));
};

export const changeCheckedToTrue = (id: number) => {
  changeIsCompletedProperty(id, taskList);
};

export const updateTaskName = (id: number, value: string): Task[] => {
  const modifyTask = taskList.map((task) =>
    task.id === id ? { ...task, name: value } : task
  );
  taskList = modifyTask;
  return modifyTask;
};

export const deleteTask = (id: number): Task[] => {
  taskList = taskList.filter((task) => task.id !== id);
  return taskList;
};
