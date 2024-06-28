import React, { useEffect, useState } from "react";
import Sidebar from "../../layouts/admin/SideBar";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Nav from "../../layouts/admin/Nav";
import Footer from "../../layouts/admin/Footer";

const PrivateRouter = () => {
  const [isToken, setIsToken] = useState(() => {
    const checkToken = Cookies.get("token") || false;
    return checkToken;
  });

  const [user, setUser] = useState();
  useEffect(() => {
    if (Cookies.get("user")) {
      const data = JSON.parse(Cookies.get("user"));
      if (data) {
        setUser(data);
      }
    }
  }, []);

  return (
    <>
      {true ? (
        <>
          <Sidebar />
          <Nav user={user} />
          <div className="flex overflow-hidden bg-white pt-16">
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            />
            <main
              id="main-content"
              className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
            >
              <div className="pt-6 px-4">
                <Outlet />
              </div>
              <Footer />
            </main>
          </div>
        </>
      ) : (
        <Navigate to="/dang-nhap" />
      )}
    </>
  );
};

export default PrivateRouter;
