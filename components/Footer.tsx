import TextLink from './TextLink';

interface Props {
  children?: React.ReactNode;
}

const Footer: React.FC<Props> = (props): JSX.Element => (
  <footer>
    <div className="container mx-auto max-w-4xl pt-10 pb-16">
      {props.children}
      <ul className="lowercase font-mono mt-2 text-gray-600 text-center">
        <li className="inline-block">
          <TextLink href="https://github.com/vadimbrodsky/">Github</TextLink>
          <span className="mx-3">/</span>
        </li>
        <li className="inline-block">
          <TextLink href="https://twitter.com/vadimbrodsky">Twitter</TextLink>
          <span className="mx-3">/</span>
        </li>
        <li className="inline-block">
          <TextLink href="https://www.TextLink.com/in/vbrodsky/">LinkedIn</TextLink>
          <span className="mx-3">/</span>
        </li>
        <li className="inline-block">
          <TextLink href="/rss">RSS</TextLink>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
