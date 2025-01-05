import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  execute(task: Task): Promise<Task> {
    return this.taskRepository.createTask(task);
  }
}
