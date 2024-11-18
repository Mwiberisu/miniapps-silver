import React from "react";

import { useSelector, useDispatch } from "react-redux";

const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </React.Fragment>
  );
}

export default Counter;
