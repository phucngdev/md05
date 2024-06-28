import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../services/product.service";
import { Carousel, message } from "antd";
import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import { addToCart } from "../../services/cart.service";

const Detail = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.dataEdit?.data);

  const [colorChecked, setColorChecked] = useState(product?.option[0]);
  const [sizeChecked, setSizeChecked] = useState(product?.option[0].size[0]);
  const [quantity, setQuantity] = useState(product?.option[0].size[0].quantity);
  const [sizeOfColor, setSizeOfColor] = useState(product?.option[0].size);
  const [count, setCount] = useState(
    product?.option[0].size[0].quantity > 0 ? 1 : 0
  );
  console.log(count);
  const [productAddCart, setProductAddCart] = useState({
    count: count,
    color: colorChecked,
    size: sizeChecked,
    _id: product?._id,
    name: product?.name,
    price: product?.price,
    thumbnail: product?.thumbnail,
  });

  // đặt giá trị ban đầu cho các option
  useEffect(() => {
    setColorChecked(product?.option[0]);
    setSizeChecked(product?.option[0].size[0]);
    setSizeOfColor(product?.option[0].size);
    setQuantity(product?.option[0].size[0].quantity);
    setProductAddCart({
      count: count,
      color: colorChecked,
      size: sizeChecked,
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      thumbnail: product?.thumbnail,
    });
  }, [product]);

  useEffect(() => {
    setProductAddCart({
      ...productAddCart,
      count: count,
      color: colorChecked,
      size: sizeChecked,
    });
  }, [count, colorChecked, sizeChecked]);

  const fetchData = async () => {
    await dispatch(getOneProduct(id));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // điều chỉnh số lượng sản phẩm
  const handleIncree = () => {
    count < quantity
      ? setCount((prev) => prev + 1)
      : message.error("Số lượng trong kho đạt giới hạn");
  };
  const handleDecree = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // thêm sản phẩm vào giỏ hàng
  const handleAddToStore = () => {
    message.success("ok");
    dispatch(addToCart(productAddCart));
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row sm:justify-between sm:flex-wrap">
          <div className="w-full lg:w-[60%] flex-grow-0 flex-shrink-0 px-[15px]">
            <Carousel autoplay arrows autoplaySpeed={3000}>
              {product?.images?.map((img, index) => (
                <div
                  key={index}
                  className="h-[600px] md:h lg:h-[700px] flex justify-center items-center"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={img}
                    alt={product?.name}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-full lg:w-[40%] flex-grow-0 flex-shrink-0 px-[15px]">
            <h1 className="text-[22px] text-[#333] font-sans leading-8 mb-[10px] pb-[10px] border-b-2 border-solid border-[#000]">
              {product?.name}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-[30px] text-[#f81f1f] font-sans ">
                {formatPrice(product?.price)}
              </span>
              <span className="text-[25px] text-[#9a9a9a] font-sans line-through">
                {formatPrice((product?.price * product?.sale) / 10)}
              </span>
              <span className="text-sm text-white px-2 bg-[#f81f1f] font-sans ">
                - {product?.sale}%
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span>Màu sắc:</span>
              <span>{colorChecked?.color}</span>
            </div>
            <div className="flex items-center gap-[10px] mb-[10px]">
              {product?.option?.map((size) => (
                <div
                  key={size?._id}
                  onClick={() => {
                    setColorChecked(size);
                    setSizeOfColor(size?.size);
                    setSizeChecked(size?.size[0]);
                    setQuantity(size?.size[0].quantity);
                    setCount(
                      count > size?.size[0].quantity
                        ? size?.size[0].quantity === 0
                          ? 0
                          : 1
                        : count === 0
                        ? 1
                        : count
                    );
                  }}
                  className={`flex justify-center items-center w-8 h-8 border ${
                    colorChecked?.color === size?.color
                      ? "border-red-600"
                      : "border-black"
                  } rounded-full cursor-pointer`}
                >
                  <img
                    src={size?.image}
                    className="w-7 h-7 rounded-[100%] object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span>Kích thước:</span>
              <span>{sizeChecked?.name}</span>
            </div>
            <div className="flex items-center gap-[10px] mb-[10px]">
              {sizeOfColor?.map((size) => (
                <div
                  key={size?._id}
                  onClick={() => {
                    setSizeChecked(size);
                    setQuantity(size?.quantity);
                    setCount(
                      count > size?.quantity
                        ? size?.quantity
                        : count === 0
                        ? 1
                        : count
                    );
                  }}
                  className={`flex justify-center items-center w-8 h-8 border ${
                    sizeChecked?._id === size?._id
                      ? "border-red-600"
                      : "border-black"
                  } rounded-full cursor-pointer`}
                >
                  {size?.name}
                </div>
              ))}
            </div>
            <Link
              to="/bang-size"
              target="blank"
              className="text-base text-[#0158da] hover:text-[#f81f1f]"
            >
              + Hướng dẫn chọn size
            </Link>
            <div className="my-[10px]">
              <span>Số lượng</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleDecree()}
                  className="w-[30px] h-[35px] border-[1px] border-solid border-[#000] px-3 flex justify-center items-center rounded-s-lg"
                >
                  -
                </button>
                <span className="w-[90px] h-[35px] border-[1px] border-x-0 border-solid border-[#000] flex justify-center items-center">
                  {count}
                </span>
                <button
                  type="button"
                  onClick={() => handleIncree()}
                  className="w-[30px] h-[35px] border-[1px] border-solid border-[#000] px-3 flex justify-center items-center rounded-e-lg"
                >
                  +
                </button>
              </div>
              <span className={quantity > 0 ? "text-black" : "text-[#f81f1f]"}>
                {quantity > 0
                  ? "Còn hàng"
                  : "Hết hàng! Vui lòng chọn màu hoặc size khác"}
              </span>
            </div>
            <button
              type="button"
              disabled={quantity === 0 ? true : false}
              onClick={() => handleAddToStore()}
              className="h-[47px] w-full cursor-pointer rounded-md bg-black mt-[15px] text-white uppercase hover:opacity-80"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[60%] px-2 md:px-0 flex flex-col md:flex-row items-center gap-3 my-8">
          <div className="flex-1 w-full h-[52px] border-1 border border-black rounded-md text-center cursor-pointer uppercase py-3 text-black">
            Mô tả sản phẩm
          </div>
          <div className="flex-1 w-full h-[52px] border-1 border border-black rounded-md text-center cursor-pointer uppercase py-3 text-black">
            Đánh giá sản phẩm
          </div>
        </div>
        <div className="py-[15px] px-2 md:px-0">
          <p className="text-[#333] text-sm leading-6">Thông tin sản phẩm</p>
          <p className="text-[#333] text-sm leading-6">
            {product?.description}
            <img
              src={product?.image_description}
              alt=""
              className="h-full w-[60%] my-1 border-x-[1px] border-solid border-[#b9b9b9]"
            />
            Về TEELAB:
          </p>
          <br />
          <p className="text-[#333] text-sm leading-6">
            You will never be younger than you are at this very moment “Enjoy
            Your Youth!”
            <br />
            <br />
            Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm” của tuổi
            trẻ - nơi nghiên cứu và cho ra đời năng lượng mang tên “Youth”.
            Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và
            trẻ trung.
            <br />
            <br />
            Lấy cảm hứng từ giới trẻ, sáng tạo liên tục, bắt kịp xu hướng và
            phát triển đa dạng các dòng sản phẩm là cách mà chúng mình hoạt động
            để tạo nên phong cách sống hằng ngày của bạn. Mục tiêu của TEELAB là
            cung cấp các sản phẩm thời trang chất lượng cao với giá thành hợp
            lý.
            <br />
            Chẳng còn thời gian để loay hoay nữa đâu youngers ơi! Hãy nhanh chân
            bắt lấy những những khoảnh khắc tuyệt vời của tuổi trẻ. TEELAB đã
            sẵn sàng trải nghiệm cùng bạn!
            <br />
            <br />
            “Enjoy Your Youth”, now!
            <br />
            <br />
            Hướng dẫn sử dụng sản phẩm Teelab:
            <br />
            - Ngâm áo vào NƯỚC LẠNH có pha giấm hoặc phèn chua từ trong 2 tiếng
            đồng hồ
            <br />
            - Giặt ở nhiệt độ bình thường, với đồ có màu tương tự.
            <br />
            - Không dùng hóa chất tẩy.
            <br />- Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt độ thích
            hợp.
            <br />
            <br />
            Chính sách bảo hành:
            <br />
            - Miễn phí đổi hàng cho khách mua ở TEELAB trong trường hợp bị lỗi
            từ nhà sản xuất, giao nhầm hàng, bị hư hỏng trong quá trình vận
            chuyển hàng.
            <br />
            - Sản phẩm đổi trong thời gian 3 ngày kể từ ngày nhận hàng
            <br />- Sản phẩm còn mới nguyên tem, tags và mang theo hoá đơn mua
            hàng, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân
            bên ngoài cửa hàng sau khi mua hàng.
          </p>
        </div>
      </div>
    </>
  );
};

export default Detail;
