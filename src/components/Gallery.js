import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
import Image from "next/image";

const Gallery = () => {
  const props = {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    autoplay: false,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <div className="pp-section pp-scrollable section counter">
      <div className="container">
        <Swiper {...props}>
        <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/chicago.jpg"
                width={452.5}
                height={603}
                title="Down Town Chicago."
                alt="Down Town Chicago."
              />
            </div>
            <div className="media-body gallery-caption">
              <p>
                Downtown Chicago, February 2023.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/birthday.jpg"
                width={452.5}
                height={603}
                title="My birthday"
                alt="My birthday"
              />
            </div>
            <div className="media-body gallery-caption">
              <p>My 22nd birthday</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/boys.jpg"
                width={452.5}
                height={603}
                title="Group of friends"
                alt="A picture of me and my friends"
              />
            </div>
            <div className="media-body gallery-caption">
              <p>One with the boys</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                width={452.5}
                height={603}
                src="/static/img/gallery/shoes.jpg"
                title="Friend"
                alt="A picture of the my friends and I"
              />
            </div>
            <div className="media-body gallery-caption">
              <p>Circle of kicks</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/wrangler.jpg"
                width={452.5}
                height={603}
                title="Jeep Wrangler"
                alt="Jeep Wrangler"
              />
            </div>
            <div className="media-body gallery-caption">
              <p>One of the most fun car's i've driven</p>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="owl-dots"></div>
        </Swiper>
      </div>
      <div className="separated"></div>
    </div>
  );
};
export default Gallery;
