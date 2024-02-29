import { Outlet } from 'react-router-dom';
import { Header } from '../components/_index';

const Root = () => {
  return (
    <div className="flex flex-col mt-16">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
