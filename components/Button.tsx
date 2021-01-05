import { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

interface Props {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

const Button: React.FC<Props> = (props): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className={classnames("inline-block relative", props.className)}>
      <Link href={props.href}>
        <a
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="uppercase text-center border-black border-2 border-solid px-4 py-3 inline-block relative w-full z-10"
        >
          {props.children}
        </a>
      </Link>
      <span
        className={classnames(
          'bg-gray-300 block w-full h-full absolute top-0 left-0',
          'transform transition duration-500',
          { '-translate-x-2 translate-y-2': !isHover },
          { 'translate-x-0 translate-y-0': isHover },
        )}
      />
    </div>
  );
};

export default Button;
