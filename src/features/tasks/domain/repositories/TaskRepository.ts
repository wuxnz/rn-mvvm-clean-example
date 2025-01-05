import { Task } from "../entities/Task";

export interface TaskRepository {
  createTask(task: Task): Promise<Task>;
  deleteTask(taskId: number): Promise<void>;
  getTasks(): Promise<Task[]>;
  updateTask(task: Task): Promise<Task>;
}
