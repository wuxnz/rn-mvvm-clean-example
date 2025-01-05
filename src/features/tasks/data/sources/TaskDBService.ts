import { Task } from "../../domain/entities/Task";
import { TasksDB } from "../db";

export const TaskApiService = {
  async createTask(task: Task): Promise<Task> {
    TasksDB.push(task);
    return Promise.resolve(task);
  },

  async deleteTask(taskId: number): Promise<void> {
    TasksDB.filter((task) => task.id !== taskId);
    return Promise.resolve();
  },

  async getTasks(): Promise<Task[]> {
    return Promise.resolve(TasksDB);
  },

  async updateTask(task: Task): Promise<Task> {
    const taskIndex = TasksDB.findIndex((t) => t.id === task.id);
    TasksDB[taskIndex] = task;
    return Promise.resolve(task);
  },
};
