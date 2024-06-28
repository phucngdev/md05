import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import SearchAndStore from "../../components/user/header/SearchAndStore";
import MainNavigate from "../../components/user/header/MainNavigate";
import ProductsNavigation from "../../components/user/header/ProductsNavigation";
import HeaderMobile from "../../components/user/header/HeaderMobile";

const Header = () => {
  return (
    <>
      <HeaderMobile />
      <SearchAndStore />
      <MainNavigate />
      <ProductsNavigation />
    </>
  );
};

export default Header;
