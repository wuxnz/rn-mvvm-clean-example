# React Native MVVM + CLEAN Architecture Todo App

## Overview
This is a **React Native** example application implementing **MVVM (Model-View-ViewModel) with CLEAN Architecture**. The app is a simple **To-Do List** built using **Expo** and **Zustand** for state management.

## Features
- Add tasks.
- Persist tasks using local storage.
- Structured using **MVVM + CLEAN Architecture** principles.
- Uses **Zustand** for state management.

## Tech Stack
- **React Native (Expo)**
- **TypeScript**
- **Zustand** (For state management)

## Project Structure
```
tasks/
│── data/
│   ├── repositories/   # Implementation of repositories (data layer)
│   ├── sources/        # Data sources (API, local storage, etc.)
│   └── db.ts           # Database configuration
│
│── domain/
│   ├── entities/       # Core business models
│   ├── repositories/   # Repository interfaces (abstraction layer)
│   └── usecases/       # Business logic use cases
│
│── presentation/
│   ├── components/     # UI components
│   ├── viewmodels/     # ViewModels (handles business logic and interacts with state)
│   └── views/          # Screens (UI implementation)
│
└── TasksNavigator.tsx  # Navigation setup
```

## Installation & Running the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/wuxnz/rn-mvvm-clean-example.git
   cd rn-mvvm-clean-example
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npm start
   ```

## State Management with Zustand
Zustand is used to manage the global state for tasks. The store is defined within the **viewmodels** folder and follows MVVM principles.

Example Zustand store:
```ts
import create from 'zustand';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title) => set((state) => ({ tasks: [...state.tasks, { id: Date.now().toString(), title, completed: false }] })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) })),
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task),
  })),
}));

export default useTaskStore;
```

## Contribution
Feel free to contribute by opening issues and submitting pull requests!

## License
MIT License. See `LICENSE` for details.

