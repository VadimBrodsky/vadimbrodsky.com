import Layout from '../components/Layout';
import Intro from '../components/Intro';
import BlogList from '../components/BlogList';
import HrWave from '../components/HrWave';
import Footer from '../components/Footer';
import TextLink from '../components/TextLink';

interface Props {
  title: string;
  description: string;
}

const IndexPage: React.FC<Props> = (props): JSX.Element => (
  <Layout title={`Home | ${props.title}`}>
    <Intro>
      <h2 className="font-sans text-4xl font-light leading-snug mb-10">
        Hello, I am <TextLink  href="/" className="font-bold">Vadim Brodsky</TextLink>, a passionate Fullstack Web
        Developer & Designer from Waterloo Canada. Currently working as a Software Developer at{' '}
        <TextLink href="/" className="font-bold">Vidyard</TextLink>, where I help to build the video marketing
        platform that businesses ❤️️
      </h2>
      <p className="text-xl text-gray-600 font-light">
        I take pride in creating digital experiences that solve problems and delight users. I am an
        avid tech enthusiast and geek, I love learning, tinkering and traveling.
      </p>
      <HrWave className="mx-auto w-36 text-gray-400 pt-16" />
    </Intro>
    <BlogList
      posts={[
        {
          title: 'Top 7 reasons to try Vue.js in 2016 ',
          date: 'Dec 29 2020',
          description:
            'Vue.js is an upcoming JavaScript frameworks that is worth a try, here are 7 good reasons to do so',
          url: '/',
        },
        {
          title: 'JavaScript Game Development — Where to Start? ',
          date: 'Dec 29 2020',
          description: 'So much tooling to little time where to event start',
          url: '/',
        },
        {
          title: 'To be or not ro be, is that a question! ',
          date: 'Dec 29 2020',
          description:
            'Shakespare is one hell of a guy, how did he write all the stuff he did? A prodigy or a fraud?',
          url: '/',
        },
        {
          title: 'Types are cool and useful, you should give TypeScript a shot',
          date: 'Dec 29 2020',
          description:
            'TypeScript is eating the JavaScript world, is there sizzle behind the hype?',
          url: '/',
        },
        {
          title: 'Who, What, Where the Serverless?',
          date: 'Dec 29 2020',
          description:
            'Are there really serlvers in serverless, we dig down to find out once and for all',
          url: '/',
        },
      ]}
    />
    <Footer>
      <HrWave className="mx-auto w-36 text-gray-400 pb-8" />
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
