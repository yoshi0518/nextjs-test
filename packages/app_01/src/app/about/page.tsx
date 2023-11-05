import Link from 'next/link';

const Page: React.FC = () => (
  <div className="flex flex-col items-center">
    <Link href="/" className="underline">
      Home
    </Link>
    <h1 className="text-2xl">About</h1>
  </div>
);

export default Page;
