import { Link } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";

const Admin = () => {
  const authData = useAppSelector((state) => state.auth.data);
  let localData: any = localStorage.getItem("userData");
  if (localData) {
    localData = JSON.parse(localData);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {authData.user.role === "Admin" || localData?.user?.role === "Admin" ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Admin Dashboard
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">
              Welcome,{" "}
              <span className="font-semibold">
                {authData.user.name || localData?.user?.role}
              </span>
              !
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
      ) : (
        <div className="text-center">
          <p className="text-gray-500">Unauthorized Access</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
