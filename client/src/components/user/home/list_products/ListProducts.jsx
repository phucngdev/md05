import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Tooltip, message } from "antd";
import ItemProduct from "./item_product/ItemProduct";
import { removeVietnameseTones } from "../../../../utils/removeTons";
import { getAllProduct } from "../../../../services/product.service";

const ListProducts = ({ path, category, isHome }) => {
  const dispatch = useDispatch();
  // call api
  const fetchData = async () => {
    await dispatch(getAllProduct());
  };
  useEffect(() => {
    fetchData();
  }, [path]);

  const products = useSelector((state) => state.product.data?.data);
  const [list, setList] = useState([]);

  // lọc sản phẩm theo category
  const filterProducts = () => {
    if (category == "Tất cả sản phẩm") {
      return products;
    }
    const filterData = products?.filter(
      (cate) =>
        removeVietnameseTones(cate.category.toLowerCase()) ===
        removeVietnameseTones(category.toLowerCase())
    );
    return isHome ? filterData?.slice(0, 8) : filterData;
  };

  useEffect(() => {
    setList(filterProducts());
  }, [category, path, products]);

  useEffect(() => {
    setList(filterProducts());
  }, [products]);

  useEffect(() => {
    if (list?.length === 0) {
      setList(filterProducts());
    }
  }, [path]);

  return isHome ? (
    list?.length > 0 && (
      <>
        <div className="container mx-auto mb-[50px]">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] text-[#333] font-mono ps-3 hover:opacity-60 lg:text-[40px] lg:ps-0">
              <Link to={path}>{category}</Link>
            </h2>
            <h4 className="text-[20px] text-red-400 hover:underline hidden lg:block">
              <Link to={path}>Xem thêm</Link>
            </h4>
          </div>
          {list?.length > 0 ? (
            <div className="container px-2 md:px-0 mx-auto grid grid-cols-2 gap-x-5 gap-y-7 xl:grid-cols-4 md:grid-cols-3">
              {list?.map((product) => (
                <ItemProduct product={product} key={product?._id} />
              ))}
            </div>
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
          <Link
            to={path}
            className="block text-center text-base text-[#333] underline decoration-1 mt-4 lg:hidden"
          >
            Xem thêm
          </Link>
        </div>
      </>
    )
  ) : (
    <>
      <div className="container mx-auto mb-[50px]">
        {list?.length > 0 ? (
          <div className="container px-2 md:px-0 mx-auto grid grid-cols-2 gap-x-5 gap-y-7 xl:grid-cols-4 md:grid-cols-3">
            {list?.map((product) => (
              <ItemProduct product={product} key={product?._id} />
            ))}
          </div>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </>
  );
};

export default ListProducts;
