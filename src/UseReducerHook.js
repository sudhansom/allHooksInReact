import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        showText: !state.showText,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        showText: !state.showText,
      };

    default:
      return state;
  }
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>Your count</h1>
      <p>{state.count}</p>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Minus
        </button>
        {state.showText ? (
          <p>This is an even number</p>
        ) : (
          <p>This is an odd number</p>
        )}
      </div>
    </div>
  );
}

export default UseReducerHook;
