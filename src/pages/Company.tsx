import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Company Page</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Company Dashboard. Manage your resources and view
          statistics here.
        </p>
        <Link
          to="/"
          className="block text-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          onClick={() => localStorage.clear()}
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Company;
