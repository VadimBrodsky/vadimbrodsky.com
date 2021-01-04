interface Props {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="inline-block relative">
      <span className="bg-gray-200 block inset-0  absolute " />
      <a className="uppercase border-black border-2 border-solid px-8 py-3 ml-2 mb-2 inline-block relative">
        {props.children}
      </a>
    </div>
  );
};

export default Button;
