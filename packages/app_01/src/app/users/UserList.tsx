type User = {
  id: string;
  name: string;
  email: string;
};

const getUsers = async (): Promise<User[]> => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users', {
  //   cache: 'no-store',
  // });
  const response = await fetch('http://localhost:3000/api/users?name=John');
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};

const UserList = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // const users: User[] = await response.json();
  // console.log({ users });

  // 意図的な遅延
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const users = await getUsers();
  // console.log({ users });

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.id}：${user.name}`}</li>
      ))}
    </ul>
  );
};

export default UserList;
