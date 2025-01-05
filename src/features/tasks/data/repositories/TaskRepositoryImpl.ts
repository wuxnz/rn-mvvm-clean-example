import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { TaskApiService } from "../sources/TaskDBService";

export class TaskRepositoryImpl implements TaskRepository {
  async createTask(task: Task): Promise<Task> {
    return TaskApiService.createTask(task);
  }

  async getTasks(): Promise<Task[]> {
    return TaskApiService.getTasks();
  }

  async updateTask(task: Task): Promise<Task> {
    return TaskApiService.updateTask(task);
  }

  async deleteTask(taskId: number): Promise<void> {
    return TaskApiService.deleteTask(taskId);
  }
}
