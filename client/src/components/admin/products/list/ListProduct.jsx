import { Button, Input, Tabs } from "antd";
import React from "react";
import ItemProduct from "./item/ItemProduct";
import { useNavigate } from "react-router-dom";

const items = [
  {
    key: "1",
    label: "Tất cả sản phẩm",
    children: <ItemProduct></ItemProduct>,
  },
  {
    key: "2",
    label: "Ấo thun",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Áo polo",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Áo polo",
    children: "Content of Tab Pane 3",
  },
  {
    key: "5",
    label: "Áo sơ mi",
    children: "Content of Tab Pane 3",
  },
  {
    key: "6",
    label: "Hoodie",
    children: "Content of Tab Pane 3",
  },
  {
    key: "7",
    label: "Áo khoác",
    children: "Content of Tab Pane 3",
  },
  {
    key: "8",
    label: "Quần",
    children: "Content of Tab Pane 3",
  },
  {
    key: "9",
    label: "Quần nữ",
    children: "Content of Tab Pane 3",
  },
  {
    key: "10",
    label: "Phụ kiện",
    children: "Content of Tab Pane 3",
  },
];

const ListProduct = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4 md:p-6 xl:p-8 my-6">
        <div className="md:flex md:items-center md:justify-between mb-3">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold whitespace-nowrap">
              Sản phẩm đang bán
            </h3>
            <Input placeholder="Tìm kiếm" />
          </div>
          <Button
            onClick={() => navigate("/admin/san-pham/tao-moi-san-pham")}
            type="primary"
            className="mt-5 md:mt-0 w-full md:w-auto"
          >
            Thêm mới sản phẩm
          </Button>
        </div>
        <Tabs defaultActiveKey="1" items={items} />
        <div className="md:flex md:items-center md:justify-between mt-10 mb-3">
          <h3 className="text-xl font-bold">Sản phẩm ngừng bán</h3>
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </>
  );
};

export default ListProduct;
