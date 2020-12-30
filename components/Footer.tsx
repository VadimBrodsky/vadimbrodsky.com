import Link from 'next/link';

interface Props {
  children?: React.ReactNode;
}

const Footer: React.FC<Props> = (props): JSX.Element => (
  <footer>
    <div className="container mx-auto max-w-4xl pt-10 pb-16">
      {props.children}
      <ul className="lowercase font-mono mt-2 text-gray-600 text-center">
        <li className="inline-block">
          <a href="https://github.com/vadimbrodsky/">Github</a> <span className="mx-3">/</span>
        </li>
        <li className="inline-block">
          <a href="https://twitter.com/vadimbrodsky">Twitter</a>
          <span className="mx-3">/</span>
        </li>
        <li className="inline-block">
          <a href="https://www.linkedin.com/in/vbrodsky/">LinkedIn</a>
          <span className="mx-3">/</span>
        </li>
        <li className="inline-block">
          <Link href="/rss">
            <a>RSS</a>
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
