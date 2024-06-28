import React, { useEffect, useState } from "react";
import SideBar from "../../components/user/listofproduct/SideBar";
import ListProducts from "../../components/user/home/list_products/ListProducts";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../services/product.service";
import { removeVietnameseTones } from "../../utils/removeTons";
import { Helmet } from "react-helmet";

const ListOfProduct = ({ path }) => {
  return (
    <>
      <Helmet>
        <title>{path} | TEELAB</title>
      </Helmet>
      <div className="container mx-auto flex gap-7">
        <SideBar />
        <ListProducts category={path} isHome={false} />
      </div>
    </>
  );
};

export default ListOfProduct;
