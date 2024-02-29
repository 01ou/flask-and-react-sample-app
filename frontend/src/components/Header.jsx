import { RootLink } from '../components/_index';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <ul className="flex space-x-4">
        <RootLink to="/">Home</RootLink>
        <RootLink to="/alignment">Alignment</RootLink>
        <RootLink to="/contact">Contact</RootLink>
        <RootLink to="/posts">Posts</RootLink>
      </ul>
    </div>
  );
};

export default Header;
  