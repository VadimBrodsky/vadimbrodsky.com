import Link from 'next/link';

import Logo from './Logo';

const Nav: React.FC = (): JSX.Element => (
  <nav className="container mx-auto text-center">
    <Logo />
    <ul className="lowercase text-center mt-10">
      <li className="inline-block">
        <Link href="/">Blog</Link>
        <span className="mx-3">/</span>
      </li>
      <li className="inline-block">
        <Link href="/">Projects</Link>
        <span className="mx-3">/</span>
      </li>
      <li className="inline-block">
        <Link href="/">About</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
