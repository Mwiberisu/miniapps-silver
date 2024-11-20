import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

// actions:

const addTodo = (input) => ({
  type: "ADD_TODO",
  input,
});

const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id,
});

const markCompleted = (id) => ({
  type: "COMPLETE_TODO",
  id,
});

function TodoApp() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClicked = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const todos = useSelector((state) => state);
  return (
    <React.Fragment>
      <h1>Todos</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={handleClicked}>Add todo</button>

        <table>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
          {todos.map((todo) => (
            <tr>
              <td>{todo.text}</td>
              <td>{todo.completed ? "YES" : "NO"}</td>
              <td>
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  DELETE
                </button>
                <input
                  type="checkbox"
                  value={input}
                  onChange={() => dispatch(markCompleted(todo.id))}
                ></input>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
}

export default TodoApp;
