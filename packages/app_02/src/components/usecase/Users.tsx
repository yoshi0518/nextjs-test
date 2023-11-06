import Link from 'next/link';

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

const getUsers = async () => {
  // 確認用に5秒待機
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();
  return users;
};

const Users = async () => {
  const users = await getUsers();

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/data/users/${user.id}`}>{`UserId：${user.id} Name：${user.name}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
