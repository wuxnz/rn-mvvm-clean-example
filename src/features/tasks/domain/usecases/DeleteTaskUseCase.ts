import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(taskId: number): Promise<void> {
    return this.taskRepository.deleteTask(taskId);
  }
}
