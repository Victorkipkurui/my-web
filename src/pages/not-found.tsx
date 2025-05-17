import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
