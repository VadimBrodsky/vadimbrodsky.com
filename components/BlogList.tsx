import Link from 'next/link';
import classnames from 'classnames';

interface Props {
  posts: Array<{
    date: string;
    description: string;
    title: string;
    url: string;
  }>;
}

const BlogList: React.FC<Props> = (props): JSX.Element => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto max-w-4xl pt-12 pb-12">
        <ul>
          {props.posts.map((post, i) => (
            <li className={classnames({ 'mb-10': props.posts.length - 1 !== i })}>
              <Link href={post.url}>
                <a>
                  <h2 className="font-sans text-xl font-bold">{post.title}</h2>
                </a>
              </Link>
              <p className="text-gray-600">
                {post.date} | <strong>TL;DR</strong> {post.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogList;
