import Link from 'next/link';

import Layout from '../components/Layout';

interface Props {
  title: string;
  description: string;
}

const IndexPage: React.FC<Props> = (props): JSX.Element => (
  <Layout title={`Home | ${props.title}`}>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </Layout>
);

export async function getStaticProps() {
  const { title, description } = (await import(`../config.json`)).default;

  return {
    props: {
      title,
      description,
    },
  };
}

export default IndexPage;
