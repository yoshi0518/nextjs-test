'use client';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementBy = (num: number) => setCount((count) => count + num);
  const decrementBy = (num: number) => setCount((count) => count - num);

  return (
    <>
      <h1>Counterページ</h1>
      <h2>Count：{count}</h2>
      <div>
        <button onClick={() => incrementBy(5)}>+5</button>
        <button onClick={() => incrementBy(1)}>+1</button>
        <button onClick={() => decrementBy(1)}>-1</button>
        <button onClick={() => decrementBy(5)}>-5</button>
      </div>
    </>
  );
};

export default Counter;
