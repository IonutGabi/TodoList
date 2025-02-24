export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export let tasks: Task[] = [];

export const updateTasks = (newTasks: Task[]) => {
  tasks = newTasks;
};
