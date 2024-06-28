import React from "react";
import { Link, useNavigate } from "react-router-dom";
import icon_incart from "../../../../public/icon_incart.svg";
import { Avatar, Badge, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const SearchAndStore = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.myCart.data);

  return (
    <>
      <div className="hidden md:block py-[5px] bg-[#f5f5f5]">
        <div className="container mx-auto flex justify-end items-center">
          <form className="relative h-10 flex items-center">
            <Input placeholder="Tìm kiếm sản phẩm" />
          </form>
          <div className="h-full w-10 ms-2 relative group flex items-center justify-center">
            <Link to="/gio-hang" className="m-0">
              <Badge count={cart.length} showZero>
                <Avatar shape="square" icon={<ShoppingCartOutlined />} />
              </Badge>
            </Link>
            <div className="group-hover:block rounded-sm shadow-lg bg-white absolute z-[99] top-[100%] right-0 hidden">
              <div className="w-[400px] max-h-[500px] overflow-scroll flex flex-col items-center text-center p-2">
                {cart.length > 0 ? (
                  cart.map((product) => (
                    <div
                      onClick={() => navigate(`/chi-tiet/${product._id}`)}
                      key={product._id}
                      className="grid grid-cols-12 items-center gap-2 p-1 cursor-pointer rounded-md hover:bg-[#ededed]"
                    >
                      <div className="col-span-2">
                        <img
                          className="w-full h-full object-cover"
                          src={product.thumbnail}
                          alt={product.name}
                        />
                      </div>
                      <span className="col-span-6">{product.name}</span>
                      <span className="col-span-1 text-left">
                        {product.color.color}
                      </span>
                      <span className="col-span-2 text-center">
                        {product.size.name}
                      </span>
                      <span className="col-span-1">x{product.count}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex flex-col justify-center items-center">
                      <img className="w-20 m-[15px]" src={icon_incart} alt="" />
                      <p className="mb-2">
                        Không có sản phẩm nào trong giỏ hàng của bạn
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAndStore;
