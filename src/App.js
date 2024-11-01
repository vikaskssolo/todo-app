// App.js
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.header}>To Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleCompletion={toggleCompletion}
      />
      <h3 style={styles.footer}>
        Total Completed Tasks: {tasks.filter((task) => task.completed).length}
      </h3>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
  },
  header: {
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  footer: {
    fontSize: "1.2em",
    fontWeight: "bold",
    marginTop: "20px",
  },
};

export default App;
