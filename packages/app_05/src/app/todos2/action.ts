'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/lib/prisma';

export const addTodo = async (data: FormData) => {
  console.log('data', data);

  const name = data.get('name') as string;
  await prisma.todo.create({ data: { name } });
  revalidatePath('/todos');
};

export const deleteTodo = async (data: FormData) => {
  console.log('data', data);

  const id = data.get('id') as string;
  await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
  revalidatePath('/todos');
};

export const doneTodo = async (id: number, isCompleted: boolean) => {
  await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      isCompleted: !isCompleted,
    },
  });
  revalidatePath('/todos');
};
