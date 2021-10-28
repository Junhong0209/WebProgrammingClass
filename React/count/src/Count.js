import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  }

  const sub = () => {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={sub}>-1</button>
      <span style={CountValue}>{count}</span>
      <button onClick={add}>+1</button>
    </>
  );
};

const CountValue = {
  paddingLeft: '10px',
  paddingRight: '10px'
}

export default Count;