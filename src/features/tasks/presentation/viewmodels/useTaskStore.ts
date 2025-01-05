import { Task } from "../../domain/entities/Task";
import { TaskRepositoryImpl } from "../../data/repositories/TaskRepositoryImpl";

import { CreateTaskUseCase } from "../../domain/usecases/CreateTaskUseCase";
import { DeleteTaskUseCase } from "../../domain/usecases/DeleteTaskUseCase";
import { GetTasksUseCase } from "../../domain/usecases/GetTasksUseCase";
import { UpdateTaskUseCase } from "../../domain/usecases/UpdateTaskUseCase";

import { create } from "zustand";

const createTaskUseCase = new CreateTaskUseCase(new TaskRepositoryImpl());
const deleteTaskUseCase = new DeleteTaskUseCase(new TaskRepositoryImpl());
const getTasksUseCase = new GetTasksUseCase(new TaskRepositoryImpl());
const updateTaskUseCase = new UpdateTaskUseCase(new TaskRepositoryImpl());

interface TaskStore {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  createTask: (task: Task) => Promise<void>;
  deleteTask: (taskId: number) => Promise<void>;
  getTasks: () => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  loading: false,
  error: null,

  createTask: async (task: Task) => {
    set({ loading: true });
    try {
      await createTaskUseCase.execute(task);
      set({ loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  deleteTask: async (taskId: number) => {
    set({ loading: true });
    try {
      await deleteTaskUseCase.execute(taskId);
      set({ loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  getTasks: async () => {
    set({ loading: true });
    try {
      const tasks = await getTasksUseCase.execute();
      set({ tasks, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  updateTask: async (task: Task) => {
    set({ loading: true });
    try {
      await updateTaskUseCase.execute(task);
      set({ loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
