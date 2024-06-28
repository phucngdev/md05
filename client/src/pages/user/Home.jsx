import React, { useEffect } from "react";
import Banner from "../../components/user/home/Banner";
import ListProducts from "../../components/user/home/list_products/ListProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto text-center py-[30px] px-[15px] lg:py-[60px]">
        <div className="mb-[25px] text-[20px] lg:text-[35px]">
          Enjoy Your Youth!
        </div>
        <div className="max-w-[685px] mx-auto mb-[25px] text-sm lg:text-base">
          Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm” của tuổi trẻ
          - nơi nghiên cứu và cho ra đời nguồn năng lượng mang tên “Youth”.
          Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và
          trẻ trung.
        </div>
      </div>
      <ListProducts path="/ao-thun" category="Áo thun" isHome={true} />
      <ListProducts path="/ao-polo" category="Áo polo" isHome={true} />
      <ListProducts path="/baby-tee" category="Baby Tee" isHome={true} />
      <ListProducts path="/ao-so-mi" category="Áo sơ mi" isHome={true} />
      <ListProducts path="/ao-khoac" category="Áo khoác" isHome={true} />
      <ListProducts path="/hoodie" category="Hoodie" isHome={true} />
      <ListProducts path="/quan" category="Quần" isHome={true} />
      <ListProducts path="/quan-nu" category="Quần nữ" isHome={true} />
      <ListProducts path="/phu-kien" category="Phụ kiện" isHome={true} />
    </>
  );
};

export default Home;
