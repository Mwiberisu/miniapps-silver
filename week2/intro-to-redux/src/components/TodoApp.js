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
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div>
                {" "}
                <p>
                  {todo.text} {todo.completed}
                </p>
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  DELETE
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
}

export default TodoApp;
