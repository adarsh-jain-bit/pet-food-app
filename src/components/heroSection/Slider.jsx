"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { generateRandomKey } from '@src/utiles/KeyGenerater';
import { Navigation, Pagination , Scrollbar ,A11y , EffectFade, Autoplay} from 'swiper/modules';
import 'swiper/css/effect-fade';
import { styles } from "./slider.style";
import Image from 'next/image';

export default function Slider() {
    const sliderImages = [
        'slider1.png',
        'slider2.png',
        'slider3.png',
        'slider4.png'
    ];
    return (
      <>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade , Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect='fade'
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={styles.swiper}
      autoplay >
      {sliderImages.map((props) => (
        <>
        <SwiperSlide key={generateRandomKey()} style={styles.swiperSlide}>
            <Image 
              src={`/assets/slider/${props}`} 
              layout="intrinsic"
              width={400}
              height={400} 
              priority 
              alt={`Slide1`}
              style={styles.swiperSlideImg}
            />
          </SwiperSlide>      
        </>
      ))}
      </Swiper>
      </>
    );
}
