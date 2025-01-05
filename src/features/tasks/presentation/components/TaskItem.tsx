// src/presentation/views/TaskItem.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Task } from "../../domain/entities/Task";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{task.title}</Text>
    <Text style={styles.status}>
      {task.completed ? "Completed" : "Pending"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    color: "gray",
  },
});

export default TaskItem;
