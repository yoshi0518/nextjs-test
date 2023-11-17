import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header>
    <nav className="p-2">
      <ul className="flex items-center space-x-2">
        <li>
          <Image src="/vercel.svg" alt="" width={140} height={120} priority />
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
