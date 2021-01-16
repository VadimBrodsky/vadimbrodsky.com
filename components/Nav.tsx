import Link from 'next/link';

import TextLink from './TextLink';
import Logo from './Logo';

const Nav: React.FC = (): JSX.Element => (
  <nav className="container mx-auto text-center">
    <Link href="/">
      <a className="inline-block">
        <Logo />
      </a>
    </Link>

    <ul className="lowercase font-mono text-center mt-10">
      <li className="inline-block">
        <TextLink href="/">Blog</TextLink>
        <span className="mx-3">/</span>
      </li>
      <li className="inline-block">
        <TextLink href="/">Projects</TextLink>
        <span className="mx-3">/</span>
      </li>
      <li className="inline-block">
        <TextLink href="/">About</TextLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
