import React, { useState } from "react";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower"]);
  const [state, setState] = useState("");

  function onChangeofInput(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.value);
  }

  function addTask() {
    if (state.trim() !== "") {
      setTasks([...tasks, state]);
      setState("");
    }
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function editTask(index: number) {
    const updatedTask = prompt("Edit Task:", tasks[index]);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="task-container">
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Hi there, what's on your list today?"
          value={state}
          onChange={onChangeofInput}
        />
        <button type="submit" className="addbtn" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="task-list">
        <ol>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <div className="btn-group">
                <button className="editbtn" onClick={() => editTask(index)}>
                  Edit
                </button>
                <button className="deletebtn" onClick={() => deleteTask(index)}>
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
