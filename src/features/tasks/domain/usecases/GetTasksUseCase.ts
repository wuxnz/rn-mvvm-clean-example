import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

export class GetTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.taskRepository.getTasks();
  }
}
