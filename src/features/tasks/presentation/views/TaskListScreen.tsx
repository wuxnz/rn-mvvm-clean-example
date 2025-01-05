// src/presentation/views/TaskListScreen.tsx
import React, { useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";

import { useTaskStore } from "../viewmodels/useTaskStore";
import TaskItem from "../components/TaskItem";

const TaskListScreen: React.FC = () => {
  const {
    tasks,
    loading,
    error,
    createTask,
    deleteTask,
    getTasks,
    updateTask,
  } = useTaskStore();

  useEffect(() => {
    getTasks();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.center} />
    );
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default TaskListScreen;
