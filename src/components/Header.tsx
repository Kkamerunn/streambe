import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import UserIcon from "./UserIcon";

const Header = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  const userAuthenticated = localStorage.getItem("userAuthenticated");
  return (
    <div className="p-5 flex flex-col gap-y-3 sm:gap-0 sm:flex-row sm:justify-between">
      {auth && <p>Hi {userAuthenticated}</p>}
      <button onClick={handleLogOut} className="bg-inherit flex gap-x-3">
        <UserIcon />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Header;
