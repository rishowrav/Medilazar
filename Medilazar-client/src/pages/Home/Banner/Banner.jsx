// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "/assets/images/h10-slider02.png";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  MdOutlineDeliveryDining,
  MdOutlineDiscount,
  MdOutlineSecurity,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMedicines, GiReturnArrow } from "react-icons/gi";

const Banner = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        style={{
          "--swiper-navigation-color": "#008000",
          "--swiper-pagination-color": "#008000",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`flex  justify-center items-center bg-[linear-gradient(-45deg,#0083AB,#00C4D4)] min-h-[600px]  `}
          >
            <div className=" flex  justify-center gap-20 ">
              <img
                className=" scale-110
                object-fill "
                src={slide1}
                alt=""
              />

              <div className="lg:w-1/2 md:w-2/3   text-center md:text-left pb-10 md:pb-0 text-white space-y-16">
                <h2 className="xl:text-6xl  text-5xl font-bold">
                  Your Cancer Care Companion
                </h2>

                <div className="flex gap-6  ">
                  <div className="flex items-center gap-2">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white  border ">
                      <GiMedicines className="text-4xl text-[#00ACC5]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-base">
                        Temperature <br />
                        controlled meds
                      </h5>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white  border ">
                      <MdOutlineDeliveryDining className="text-4xl text-[#00ACC5]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-base">
                        Free Doorstep <br /> Delivery
                      </h5>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white  border ">
                      <MdOutlineDiscount className="text-4xl text-[#00ACC5]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-base">
                        Up to 70% <br /> Off
                      </h5>
                    </div>
                  </div>
                </div>

                <button className="btn btn-lg bg-white  text-[#0083AB] rounded-full px-14">
                  SHOP NOW <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
