const Page = ({ params }: { params: { id: string } }) => {
  // console.log({ props });
  // props: { params: { id: 'a' }, searchParams: { hello: 'world', foo: 'bar' } }
  return <div className="f-4 font-bold">Blog ID：{params.id}</div>;
};

export default Page;
