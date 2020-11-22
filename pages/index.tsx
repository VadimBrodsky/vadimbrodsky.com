import Link from 'next/link';

import Layout from '../components/Layout';

const IndexPage: React.FunctionComponent = (): JSX.Element => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
