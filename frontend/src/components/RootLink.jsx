import { Link } from 'react-router-dom';

const RootLink = ({ to, children }) => {
  return (
    <li className="bg-gray-500 p-2 border border-gray-700">
      <Link to={to} className="text-white">{children}</Link>
    </li>
  );
};

export default RootLink;

