import React, { useEffect, useState } from "react";
import "./Tasks.css";

interface Task {
  id: string;
  title: string;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  // ✅ Fetch tasks from the backend when the page loads
  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data); // ✅ Save tasks in state
        } else {
          console.error("Failed to fetch tasks");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // ✅ Add a new task to the backend
  const addTask = async () => {
    const token = localStorage.getItem("token");
    if (!token || taskTitle.trim() === "") return;

    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: taskTitle }),
      });

      if (response.ok) {
        const newTask = await response.json();
        setTasks([...tasks, newTask]); // ✅ Add task to state
        setTaskTitle("");
      } else {
        console.error("Failed to create task");
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // ✅ Edit a task in the backend
  const editTask = async (taskId: string) => {
    const updatedTitle = prompt("Edit Task:");
    if (!updatedTitle || updatedTitle.trim() === "") return;

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: updatedTitle }),
      });

      if (response.ok) {
        setTasks(tasks.map((task) => (task.id === taskId ? { ...task, title: updatedTitle } : task)));
      } else {
        console.error("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // ✅ Delete a task from the backend
  const deleteTask = async (taskId: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task.id !== taskId)); // ✅ Remove task from state
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="task-container">
      <div className="input-container">
        <input
          type="text"
          className="task-input"
          placeholder="Hi there, what's on your list today?"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit" className="addbtn" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="task-list">
        <ol>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-text">{task.title}</span>
              <div className="btn-group">
                <button className="editbtn" onClick={() => editTask(task.id)}>
                  Edit
                </button>
                <button className="deletebtn" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Tasks;