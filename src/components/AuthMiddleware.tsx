import { useEffect } from "react";
import { useAppSelector } from "../Redux/hooks";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { setToken } from "../Redux/features/AuthSlice";

const AuthMiddleware = () => {
  let localData: string | null = localStorage.getItem("userData");
  if (localData) {
    localData = JSON.parse(localData);
    setToken({ localData });
  }
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.auth.data);
  useEffect(() => {
    if (!authData?.auth_token && !localData) {
      navigate("/");
    }
  }, [navigate, authData, localData]);

  let content = null;

  if (authData) {
    content = <Outlet />;
  }

  return content;
};

export default AuthMiddleware;
