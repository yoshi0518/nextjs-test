'use client';

import useCounterStore from '@/store/Counter';

import Button from '../parts/Button';

const Counter = () => {
  const count1 = useCounterStore((store) => store.count1);
  const incrementByCount1 = useCounterStore((store) => store.incrementByCount1);
  const decrementByCount1 = useCounterStore((store) => store.decrementByCount1);
  const resetCount1 = useCounterStore((store) => store.resetCount1);
  const count2 = useCounterStore((store) => store.count2);
  const incrementByCount2 = useCounterStore((store) => store.incrementByCount2);
  const decrementByCount2 = useCounterStore((store) => store.decrementByCount2);
  const resetCount2 = useCounterStore((store) => store.resetCount2);

  return (
    <>
      <h1>Counter</h1>
      <h2>Count1：{count1}</h2>
      <div className="m-2 flex gap-1">
        <Button color="blue" onClick={() => incrementByCount1(1)}>
          +1
        </Button>
        <Button color="blue" onClick={() => incrementByCount1(5)}>
          +5
        </Button>
        <Button color="green" onClick={() => decrementByCount1(1)}>
          -1
        </Button>
        <Button color="green" onClick={() => decrementByCount1(5)}>
          -5
        </Button>
        <Button onClick={resetCount1}>Reset</Button>
      </div>
      <h2>Count2：{count2}</h2>
      <div className="m-2 flex gap-1">
        <Button color="blue" onClick={() => incrementByCount2(1)}>
          +1
        </Button>
        <Button color="blue" onClick={() => incrementByCount2(5)}>
          +5
        </Button>
        <Button color="green" onClick={() => decrementByCount2(1)}>
          -1
        </Button>
        <Button color="green" onClick={() => decrementByCount2(5)}>
          -5
        </Button>
        <Button onClick={resetCount2}>Reset</Button>
      </div>
    </>
  );
};

export default Counter;
