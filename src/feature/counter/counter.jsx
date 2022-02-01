import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementAsync } from "./counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => dispatch(incrementAsync(inputRef.current.value * 1))}
        >
          +++
        </button>
      </div>
    </div>
  );
};

export default Counter;
