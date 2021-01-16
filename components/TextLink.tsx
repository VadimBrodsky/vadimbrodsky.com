import Link, { LinkProps } from 'next/link';
import classnames from 'classnames';

type Props = LinkProps & {
  children?: React.ReactNode;
  className?: string;
};

const TextLink: React.FC<Props> = (props): JSX.Element => {
  const { className, children, ...nextLinkProps } = props;

  return (
    <Link {...nextLinkProps}>
      <a
        className={classnames(
          'hover:underline hover:font-bold',
          'focus:underline ',
          className,
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default TextLink;
