import React, { useEffect, useState } from "react";
import Editor from "../../components/admin/create_product/editor/Editor";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload, Button, Input, Select } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      sale: 0,
      description: "",
      thumbnail: "",
      thumbnail_hover: "",
      images: [],
      image_description: "",
      category: "",
      status: false,
      option: [],
      author: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Tên sản phẩm không được để trống"),
      thumbnail_hover: Yup.string().required(
        "Ảnh thumbnail hover sản phẩm không được để trống"
      ),
      thumbnail: Yup.string().required(
        "Ảnh thumbnail sản phẩm không được để trống"
      ),
      description: Yup.string().required(
        "Description sản phẩm không được để trống"
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        resetForm();
      } catch (error) {
        message.error("Lỗi");
      }
    },
  });

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
  };

  const handleChangeCategory = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Thêm mới sản phẩm</h3>
          <Button htmlType="submit">Lưu sản phẩm</Button>
        </div>
        <div className="flex gap-6">
          <div className="rounded-[20px] w-1/3">
            <div className="border p-4 border-gray-200 rounded-[20px]">
              <h3 className="text-xl font-normal mb-2">Thumbnail</h3>
              <div className="border border-gray-200 rounded-[20px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-2.jpg?v=1717729240960"
                  alt=""
                />
              </div>
              <span className="text-[11px] text-gray-400">
                Gợi ý: hình ảnh của sản phẩm nên có dạng *png, *jpg hoặc *jpeg
              </span>
              {formik.touched.thumbnail && formik.errors.thumbnail ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.thumbnail}
                </div>
              ) : null}
            </div>
            <div className="border p-4 border-gray-200 rounded-[20px] mt-4">
              <h3 className="text-xl font-normal mb-2">Thumbnail hover</h3>
              <div className="flex items-center justify-center border border-gray-200 rounded-[20px] overflow-hidden">
                <Upload
                  name="thumbnail_hover"
                  listType="picture-card"
                  className="m-3"
                  showUploadList={false}
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  // beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {formik.values.thumbnail_hover ? (
                    <img
                      src={formik.values.thumbnail_hover}
                      alt="thumbnail_hover"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <button className="border-0" type="button">
                      {loading ? <LoadingOutlined /> : <PlusOutlined />}
                      <div className="mt-2">Upload</div>
                    </button>
                  )}
                </Upload>
              </div>
              <span className="text-[11px] text-gray-400">
                Gợi ý: hình ảnh của sản phẩm nên có dạng *png, *jpg hoặc *jpeg
              </span>
              {formik.touched.thumbnail_hover &&
              formik.errors.thumbnail_hover ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.thumbnail_hover}
                </div>
              ) : null}
            </div>
            <div className="border p-4 border-gray-200 rounded-[20px] mt-4">
              <h3 className="text-xl font-normal mb-2">Danh mục sản phẩm</h3>
              <Select
                defaultValue="lucy"
                className="w-full"
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Áo thun" },
                  { value: "lucy", label: "Áo polo" },
                  { value: "lucy", label: "Áo sơ mi" },
                  { value: "lucy", label: "Baby tee" },
                  { value: "lucy", label: "Hoodie" },
                  { value: "lucy", label: "Áo khoác" },
                  { value: "lucy", label: "Quần" },
                  { value: "lucy", label: "Quần nữ" },
                  { value: "lucy", label: "Phụ kiện" },
                ]}
              />
            </div>
          </div>
          <div className="rounded-[20px] flex-1">
            <div className="border border-gray-200 p-4 rounded-[20px]">
              <h3 className="text-xl font-normal mb-8">Tổng quan</h3>
              <h5 className="text-base font-normal mb-2">Tên sản phẩm</h5>
              <Input
                placeholder="nhập tên sản phẩm"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </div>
              ) : null}
              <h5 className="text-base font-normal mb-2 mt-5">
                Chi tiết sản phẩm sản phẩm
              </h5>
              <Editor />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>
            <div className="border border-gray-200 p-4 rounded-[20px] mt-4"></div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
