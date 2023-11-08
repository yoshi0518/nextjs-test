import { revalidatePath } from 'next/cache';

import prisma from '@/lib/prisma';

const Page = async () => {
  const todos = await prisma.todo.findMany();

  const addTodo = async (data: FormData) => {
    'use server';
    console.log('data', data);

    const name = data.get('name') as string;
    await prisma.todo.create({ data: { name } });
    revalidatePath('/todos');
  };

  const doneTodo = async (data: FormData) => {
    'use server';
    console.log('data', data);

    const id = data.get('id') as string;
    await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        isCompleted: true,
      },
    });
    revalidatePath('/todos');
  };

  const deleteTodo = async (data: FormData) => {
    'use server';
    console.log('data', data);

    const id = data.get('id') as string;
    await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath('/todos');
  };

  return (
    <>
      <h1>Todo一覧</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`flex items-center space-x-2 ${todo.isCompleted ? 'line-through' : ''}`}>
            <span>{todo.name}</span>
            <form>
              <input type="hidden" name="id" value={todo.id} />
              <button className="rounded-lg bg-gray-500 px-2 py-1 text-white" formAction={doneTodo}>
                完了
              </button>
              <button className="ml-1 rounded-lg bg-red-500 px-2 py-1 text-white" formAction={deleteTodo}>
                削除
              </button>
            </form>
          </li>
        ))}
      </ul>
      <div>
        <form action={addTodo}>
          <label>Name：</label>
          <input name="name" className="rounded-lg border-2 p-1" />
          <button type="submit" className="ml-1 rounded-lg bg-blue-500 px-2 py-1 text-white">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
