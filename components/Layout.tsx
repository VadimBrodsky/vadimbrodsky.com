import Head from './Head';
import Nav from './Nav';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const DEFAULT_TITLE = 'This is the default title';

const Layout: React.FC<Props> = (props): JSX.Element => (
  <>
    <Head>
      <title>{props.title || DEFAULT_TITLE}</title>
    </Head>
    <div className="mt-10">
      <header>
        <Nav />
      </header>
      {props.children}
    </div>
  </>
);

export default Layout;
