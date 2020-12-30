/* import Link from 'next/link'; */

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import BlogList from '../components/BlogList';
import HrWave from '../components/HrWave';
import Footer from '../components/Footer';

interface Props {
  title: string;
  description: string;
}

const IndexPage: React.FC<Props> = (props): JSX.Element => (
  <Layout title={`Home | ${props.title}`}>
    <Intro>
      <h2 className="font-sans text-4xl font-light leading-snug mb-10">
        Hello, I am <strong className="font-bold">Vadim Brodsky</strong>, a passionate Fullstack Web
        Developer & Designer from Waterloo Canada. Currently working as a Software Developer at{' '}
        <strong className="font-bold">Vidyard</strong>, where I help to build the video marketing
        platform that businesses ❤️️
      </h2>
      <p className="text-xl text-gray-600 font-light">
        I take pride in creating digital experiences that solve problems and delight users. I am an
        avid tech enthusiast and geek, I love learning, tinkering and traveling.
      </p>
      <HrWave className="mx-auto w-36 text-gray-400 pt-16" />
    </Intro>
    <BlogList />
    <Footer>
      <HrWave className="mx-auto w-36 text-gray-400 pb-16" />
      <h2 className="font-sans font-light text-3xl text-center">Get in touch, say hello</h2>
    </Footer>
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
