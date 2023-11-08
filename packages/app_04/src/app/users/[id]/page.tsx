import PageUserDetail from '@/components/page/users/detail';

const Page = ({ params }: { params: { id: string } }) => {
  console.log({ id: params.id });
  return <PageUserDetail id={params.id} />;
};

export default Page;
