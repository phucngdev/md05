import React from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    text: "Áo thun",
    link: "/ao-thun",
  },
  {
    text: "Baby Tee",
    link: "/baby-tee",
  },
  {
    text: "Áo polo",
    link: "/ao-polo",
  },
  {
    text: "Áo sơ mi",
    link: "/ao-so-mi",
  },
  {
    text: "Áo khoác",
    link: "/ao-khoac",
  },
  {
    text: "Hoodie",
    link: "/hoodie",
  },
  {
    text: "Quần",
    link: "/quan",
  },
  {
    text: "Quần nữ",
    link: "/quan-nu",
  },
  {
    text: "Phụ kiện",
    link: "/phu-kien",
  },
];

const ProductsNavigation = () => {
  return (
    <>
      <div className="hidden md:flex container mx-auto items-center justify-center md:h-[112px] lg:h-[56px]">
        <ul className="flex flex-wrap justify-center items-center h-full md:text-sm">
          <li className="">
            <Link
              to="/tat-ca-san-pham"
              className="pt-[15px] px-[15px] pb-[17px] hover:text-[#707070]"
            >
              Tất cả sản phẩm
            </Link>
          </li>
          {navList.map((item, index) => (
            <li key={index} className="">
              <Link
                to={item.link}
                className="pt-[15px] px-[15px] pb-[17px] hover:text-[#707070]"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsNavigation;
