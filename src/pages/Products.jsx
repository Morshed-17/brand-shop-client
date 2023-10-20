import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import PhoneCard from "../components/PhoneCard/PhoneCard";
const Products = () => {
  const phones = useLoaderData();

  console.log(phones);
  return (
    <div>
      <div className="rounded-md overflow-hidden">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full  lg:h-[500px] h-[250px] object-cover"
            src="https://www.erajaya.com/files/uploads/newseventattachment/uri/2021/Jan/15/600188b518f4a/available-web-banner-iphone-12-pro-dekstop-1091x_.jpg?token=3063ae63cef065bef572f6acc6e2787c"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:h-[500px] h-[250px] "
            src="https://www.bhawar.com/images/617a67857dd0ebe3d8f05823_6130875b1de026260d554f62_Samsung%2520Cover.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:h-[500px] h-[250px] "
            src="https://www.gloo.com.my/image/cache/catalog/Images/Brand%20Store/MI/202211/Web%20Banner_Xiaomi%2012T%20series%201090X450%20-1090x450.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="my-16 ">
        <h2 className="text-4xl font-bold text-center">Products</h2>
            {
              phones.length > 0 ? 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-6">
                
                {
                    phones.map(phone => <PhoneCard key={phone._id} phone={phone}></PhoneCard>)
                }
            </div>
            :
            <div className="my-12">
                <h2 className="text-2xl text-center">No product Found </h2>
                <h2 className="text-5xl mt-4 text-center">👜</h2>
            </div>
            }
      </div>
    </div>
  );
};

export default Products;
