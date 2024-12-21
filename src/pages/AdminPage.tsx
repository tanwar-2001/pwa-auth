import { Link } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";

const Admin = () => {
  const authData = useAppSelector((state) => state.auth.data);
  let userData: any = localStorage.getItem("userData");
  if (userData) {
    userData = JSON.parse(userData);
  }
  return (
    <>
      {authData.user.role === "Admin" || userData?.user?.role ? (
        <div>
          <h1>Admin Page</h1>
          <Link
            to="/"
            className="underline"
            onClick={() => localStorage.clear()}
          >
            Sign Out
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Admin;
