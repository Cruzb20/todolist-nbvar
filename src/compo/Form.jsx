import React, { useState } from "react";
import './Form.css';

function Form() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [editedTaskIndex, setEditedTaskIndex] = useState(-1);

  const addTask = () => {
    if (newTask.trim() !== "") {
      if (editedTaskIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editedTaskIndex] = newTask;
        setTasks(updatedTasks);
        setNewTask("");
        setEditedTask("");
        setEditedTaskIndex(-1);
      } else {
        setTasks([...tasks, newTask]);
        setNewTask("");
      }
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditedTask(tasks[index]);
    setEditedTaskIndex(index);
    setNewTask(tasks[index]);
  };

  return (
    <div className="App">
    <h1>To-Do List</h1><br/><br/>
   <div  className="Abb"> <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Enter task"
    />
        <button onClick={addTask}>{editedTaskIndex !== -1 ? "Update Task" : "Add Task"}</button></div><br/><br/>
    <ul className="ul">
      {tasks.map((task, index) => (
        <li key={index} className="li">
           {index + 1}.&nbsp;&nbsp;&nbsp;
          {index === editedTaskIndex ? (
            <input
              type="text"
              style={{border: "none", outline: "none"}}
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
          ) : (
            task
            
          )}
        
          <button onClick={() => editTask(index)}><i className='bx bx-edit'></i></button>
          <button onClick={() => deleteTask(index)}><i className='bx bxs-trash'></i></button>
         
          <br/><br/><br/>
        </li>
      ))}
    </ul>
    <div className="border"></div>
  </div>
 
  
  );
}

export default Form;







