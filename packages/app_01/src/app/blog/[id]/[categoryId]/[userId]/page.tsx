const Page = ({ params }: { params: { id: string; categoryId: string; userId: string } }) => {
  // console.log({ props });
  // props: { params: { id: 'a' }, searchParams: { hello: 'world', foo: 'bar' } }
  console.log({ params });
  return (
    <>
      <div className="f-4 font-bold">
        <div>Blog ID：{params.id}</div>
        <div>Category ID：{params.categoryId}</div>
        <div>User ID：{params.userId}</div>
      </div>
    </>
  );
};

export default Page;
