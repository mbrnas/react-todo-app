import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };
    setTodoList([...todoList, task]); // Spread 'task' instead of 'newTask'
  };
  

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a task"
                onChange={handleChange}
              />
              <button className="btn btn-primary" onClick={addTask}>
                Add Task
              </button>
            </div>
            <ul className="list-group">
              {todoList.map((task) => (
                <li className="list-group-item" key={task.id}>
                  {task.taskName}
                  <button
                    className="btn btn-danger float-end"
                    onClick={() => deleteTask(task.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
