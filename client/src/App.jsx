import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRouter from "./routes/user/PublicRouter";
import PrivateRouter from "./routes/admin/PrivateRouter";
import Home from "./pages/user/Home";
import NotFound from "./pages/user/NotFound";
import ListOfProduct from "./pages/user/ListOfProduct";
import Size from "./pages/user/Size";
import Service from "./pages/user/Service";
import Detail from "./pages/user/Detail";
import Cart from "./pages/user/Cart";
import Pay from "./pages/user/Pay";
import CheckOrder from "./pages/user/CheckOrder";
import CheckOrderDetail from "./pages/user/CheckOrderDetail";
import Login from "./pages/user/Login";
import Dashboard from "./pages/admin/Dashboard";
import NotFoundAdmin from "./pages/admin/NotFoundAdmin";
import Products from "./pages/admin/Products";
import CreateProduct from "./pages/admin/CreateProduct";
import Register from "./pages/user/Register";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="chi-tiet/:id" element={<Detail />} />
          <Route path="gio-hang" element={<Cart />} />
          <Route path="thanh-toan" element={<Pay />} />
          <Route path="kiem-tra-don-hang" element={<CheckOrder />} />
          <Route path="kiem-tra-don-hang/:id" element={<CheckOrderDetail />} />
          <Route path="bang-size" element={<Size />} />
          <Route path="chinh-sach-doi-tra" element={<Service />} />
          <Route
            path="tat-ca-san-pham"
            element={<ListOfProduct path={"Tất cả sản phẩm"} />}
          />
          <Route path="ao-thun" element={<ListOfProduct path={"Áo thun"} />} />
          <Route path="ao-polo" element={<ListOfProduct path={"Áo polo"} />} />
          <Route
            path="baby-tee"
            element={<ListOfProduct path={"Baby tee"} />}
          />
          <Route
            path="ao-khoac"
            element={<ListOfProduct path={"Áo khoác"} />}
          />
          <Route
            path="ao-so-mi"
            element={<ListOfProduct path={"Áo sơ mi"} />}
          />
          <Route path="quan-nu" element={<ListOfProduct path={"Quần nu"} />} />
          <Route path="hoodie" element={<ListOfProduct path={"Hoodie"} />} />
          <Route path="quan" element={<ListOfProduct path={"Quần"} />} />
          <Route
            path="phu-kien"
            element={<ListOfProduct path={"phụ kiện"} />}
          />
        </Route>
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<NotFoundAdmin />} />
          <Route path="san-pham" element={<Products />} />
          <Route path="san-pham/tao-moi-san-pham" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
