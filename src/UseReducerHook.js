import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      <button
        onClick={() => {
          navigate("/effect");
        }}
      >
        Change to UseEffect
      </button>
    </div>
  );
}

export default UseReducerHook;
