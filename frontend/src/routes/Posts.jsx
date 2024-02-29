import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <div className='m-4'>
      <h1 className='text-4xl font-bold'>Posts</h1>
      <Outlet />
    </div>
  )
}

export default Posts;