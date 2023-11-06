import { notFound } from 'next/navigation';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const getUser = async (id: string) => {
  // 確認用に5秒待機
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await response.json();

  if (!user.id) notFound();
  return user;
};

const User = async ({ id }: { id: string }) => {
  const user = await getUser(id);

  return (
    <>
      <div>id：{user.id}</div>
      <div>name：{user.name}</div>
      <div>email：{user.email}</div>
      <div>phone：{user.phone}</div>
    </>
  );
};

export default User;
