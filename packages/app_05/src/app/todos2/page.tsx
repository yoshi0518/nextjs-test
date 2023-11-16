import prisma from '@/lib/prisma';

import { addTodo, deleteTodo } from './action';
import DoneTodo from './DoneTodo';

const Page = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <h1>Todo一覧</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`flex items-center space-x-2 ${todo.isCompleted ? 'line-through' : ''}`}>
            <DoneTodo id={todo.id} isCompleted={todo.isCompleted} />
            <span>{todo.name}</span>
            <form>
              <input type="hidden" name="id" value={todo.id} />
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
