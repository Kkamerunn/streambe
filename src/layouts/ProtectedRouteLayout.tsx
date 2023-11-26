import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";

const ProtectedRouteLayout = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <div className="md:min-h-screen relative">
          <Header />
          <main className="p-5">
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedRouteLayout;
