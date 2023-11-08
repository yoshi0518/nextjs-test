'use client';

const Home = () => {
  const handlePost = async () => {
    const response = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        header1: 'hello world',
        header2: 'hoo bar',
      },
      body: JSON.stringify({
        key1: 'value1',
        key2: 'value2',
        key3: 100,
      }),
    });

    console.log({ response: await response.json() });
  };

  return (
    <main>
      <h1>app_04</h1>
      <div>
        <button onClick={handlePost}>POST</button>
      </div>
    </main>
  );
};

export default Home;
