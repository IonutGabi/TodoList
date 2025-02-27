export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export let tasks: Task[] = [];
