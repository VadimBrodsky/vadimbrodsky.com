import Link from 'next/link';

const Logo: React.FC = (): JSX.Element => (
  <Link href="/">
    <svg className="w-20 inline-block" viewBox="0 0 75 43" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-current"
        d="M0.705933 0.179993H40.0659L20.3859 42.84L0.705933 0.179993ZM20.3859 37.56L36.6459 2.39999H4.18593L20.3859 37.56Z"
      />
      <path
        className="fill-current"
        d="M60.54 0.239992C63.18 0.239992 65.28 0.639992 66.84 1.43999C68.72 2.39999 70.16 3.71999 71.16 5.39999C72.2 7.07999 72.72 8.95999 72.72 11.04C72.72 13 72.2 14.82 71.16 16.5C70.12 18.14 68.7 19.44 66.9 20.4C69.06 21.16 70.88 22.48 72.36 24.36C73.84 26.24 74.58 28.36 74.58 30.72C74.58 32.8 74.04 34.72 72.96 36.48C71.92 38.2 70.52 39.56 68.76 40.56C67.88 41.04 66.9 41.4 65.82 41.64C64.74 41.88 63.3 42 61.5 42H43.02V0.239992H60.54Z"
      />
    </svg>
  </Link>
);

export default Logo;
