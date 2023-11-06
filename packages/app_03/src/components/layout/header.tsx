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
          <Link href="/image1">Image1</Link>
        </li>
        <li>
          <Link href="/image2">Image2</Link>
        </li>
        <li>
          <Link href="/image3">Image3</Link>
        </li>
        <li>
          <Link href="/image4">Image4</Link>
        </li>
        <li>
          <Link href="/image5">Image5</Link>
        </li>
        <li>
          <Link href="/image6">Image6</Link>
        </li>
        <li>
          <Link href="/image7">Image7</Link>
        </li>
        <li>
          <Link href="/image8">Image8</Link>
        </li>
        <li>
          <Link href="/image9">Image9</Link>
        </li>
        <li>
          <Link href="/image10">Image10</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
