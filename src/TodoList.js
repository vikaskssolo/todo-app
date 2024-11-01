// TodoList.js
import React, { useState } from "react";

function TodoList({ tasks, deleteTask, editTask, toggleCompletion }) {
  const [isEditing, setIsEditing] = useState(null);
  const [currentTask, setCurrentTask] = useState({
    description: "",
    category: "",
    schedule: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (task) => {
    setIsEditing(task.id);
    setCurrentTask(task);
  };

  const handleEditSubmit = (id) => {
    editTask(id, currentTask);
    setIsEditing(null);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            ...styles.task,
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "red" : "black",
          }}
        >
          {isEditing === task.id ? (
            <div>
              <input
                type="text"
                name="description"
                value={currentTask.description}
                onChange={handleEditChange}
              />
              <input
                type="text"
                name="category"
                value={currentTask.category}
                onChange={handleEditChange}
              />
              <input
                type="datetime-local"
                name="schedule"
                value={currentTask.schedule}
                onChange={handleEditChange}
              />
              <button onClick={() => handleEditSubmit(task.id)}>Save</button>
            </div>
          ) : (
            <div>
              <h2>{task.description}</h2>
              <p>Category: {task.category}</p>
              <p>Schedule: {task.schedule}</p>
              <p>Status: {task.completed ? "Completed" : "Scheduled"}</p>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
              />
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  task: {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    textAlign: "left",
  },
};

export default TodoList;
