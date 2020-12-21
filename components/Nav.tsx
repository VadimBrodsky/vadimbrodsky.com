import Link from 'next/link';

import Logo from './Logo';

const Nav: React.FC = (): JSX.Element => (
  <nav className="container mx-auto text-center">
    <Link href="/">
      <a className="inline-block">
        <Logo />
      </a>
    </Link>

    <ul className="lowercase text-center mt-10">
      <li className="inline-block">
        <Link href="/">
          <a>Blog</a>
        </Link>
        <span className="mx-3">/</span>
      </li>
      <li className="inline-block">
        <Link href="/">
          <a>Projects</a>
        </Link>
        <span className="mx-3">/</span>
      </li>
      <li className="inline-block">
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
