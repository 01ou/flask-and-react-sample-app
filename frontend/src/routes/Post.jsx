import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  if (!res.ok) {
    throw Error('Not Found');
  }
  const post = await res.json();
  return { post };
}

function Post() {
  const { post } = useLoaderData();
  return (
    <div>
      <p className='text-lg'>ID: {post.id}</p>
      <p className='text-2xl px-4 py-2 bg-gray-700 text-gray-100 '>{post.title}</p>
      <p className='text-base p-4 bg-gray-300'>{post.body}</p>
    </div>
  )
}

export default Post;
