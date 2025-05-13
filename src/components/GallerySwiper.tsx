
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySwiper.css';

const images = [
  './',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
];

const GallerySwiper = () => {
  return (
    <div className="swiper-wrapper-custom">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="gallery-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySwiper;
