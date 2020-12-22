interface Props {
  children?: React.ReactNode;
}

const Intro: React.FC<Props> = (props): JSX.Element => (
  <section
    className="bg-no-repeat"
    style={{ backgroundImage: 'url(/background-dots.svg), url(/background-rectangle.svg)', backgroundPosition: '8% 8%, 4% 8%' }}
  >
    <div className="container mx-auto max-w-4xl pt-10 pb-16">{props.children}</div>
  </section>
);

export default Intro;
