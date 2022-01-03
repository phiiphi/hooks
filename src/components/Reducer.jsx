import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, isAdmin: !state.isAdmin };
      case "DECREMENT":
        return { count: state.count - 1, isAdmin: !state.isAdmin };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, isAdmin: true });
  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>dEcrement</button>
    </div>
  );
};
export default Reducer;
