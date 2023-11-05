import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header>
    <nav className="p-2">
      <ul className="flex items-center space-x-2">
        <li>
          <Image src="/vercel.svg" alt="" width={140} height={120} />
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/data">Data</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
