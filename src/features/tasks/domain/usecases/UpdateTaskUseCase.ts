import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(task: Task): Promise<Task> {
    return this.taskRepository.updateTask(task);
  }
}
