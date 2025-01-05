// src/App.tsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TaskListScreen from "./src/features/tasks/presentation/views/TaskListScreen";

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <TaskListScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
