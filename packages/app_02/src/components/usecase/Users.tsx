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
          <li key={user.id}>{`UserId：${user.id} Name：${user.name}`}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
