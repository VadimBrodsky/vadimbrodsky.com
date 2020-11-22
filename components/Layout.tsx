import Head from 'next/head';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const DEFAULT_TITLE = 'This is the default title';

const Layout: React.FC<Props> = (props): JSX.Element => (
  <div>
    <Head>
      <title>{props.title || DEFAULT_TITLE}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {props.children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
