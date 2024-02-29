import { Link, useLoaderData } from 'react-router-dom';

export async function loader(params) {
  console.log(params);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { posts };
}

function PostIndex() {
  const { posts } = useLoaderData();

  return (
    <ul>
      {posts.map((post) => (
        <li className='my-1.5 border-b border-gray-300' key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.id}:{post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostIndex;