'use client';

import { useTransition } from 'react';

import { doneTodo } from './action';

const DoneTodo = ({ id, isCompleted }: { id: number; isCompleted: boolean }) => {
  const [isPending, startTransition] = useTransition();

  console.log({ isPending });

  return (
    <input onChange={() => startTransition(() => doneTodo(id, isCompleted))} checked={isCompleted} type="checkbox" />
  );
};

export default DoneTodo;
