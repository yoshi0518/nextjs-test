'use client';

import useCounterStore from '@/store/Counter';

const Counter = () => {
  console.log('再描画');
  const count = useCounterStore((store) => store.count);
  const incrementBy = useCounterStore((store) => store.incrementBy);
  const decrementBy = useCounterStore((store) => store.decrementBy);
  const reset = useCounterStore((store) => store.reset);

  return (
    <>
      <h1>Counter</h1>
      <div>Count：{count}</div>
      <div>
        <button onClick={() => incrementBy(1)}>+1</button>
        <button onClick={() => incrementBy(5)}>+5</button>
        <button onClick={() => decrementBy(1)}>-1</button>
        <button onClick={() => decrementBy(5)}>-5</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
