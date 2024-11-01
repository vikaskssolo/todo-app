// TodoForm.js
import React, { useState } from "react";

function TodoForm({ addTask }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && category && schedule) {
      addTask({ description, category, schedule });
      setDescription("");
      setCategory("");
      setSchedule("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.input}
      />
      <input
        type="datetime-local"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Task</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", flexDirection: "column", alignItems: "center" },
  input: { margin: "5px", padding: "8px", width: "80%" },
  button: { padding: "10px 20px", margin: "10px" },
};

export default TodoForm;
