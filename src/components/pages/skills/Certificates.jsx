import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "@/app/globals.css";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className="lg:w-1/2 mt-10 lg:mt-0">
      <div className="w-2/3 mx-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-xl">
            <Image
              src="/img/dev.png"
              alt="codegif"
              width={400}
              height={400}
              className="mb-3 object-cover rounded-2xl  "
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <Image
              src="/img/jsdicoding.png"
              alt="codegif"
              width={400}
              height={400}
              className="mb-3  object-cover rounded-xl "
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl ">
            <Image
              src="/img/jscodepol.png"
              alt="codegif"
              width={400}
              height={400}
              className="mb-3  object-cover rounded-xl  "
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl ">
            <Image
              src="/img/frontend.png"
              alt="codegif"
              width={400}
              height={400}
              className="mb-3  object-cover rounded-xl  "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Certificates;
