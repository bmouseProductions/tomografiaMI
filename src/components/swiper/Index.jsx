// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Slider({ slideContent, slideCount }) {
    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
        >
            {slideContent.map((content, index) => (
                <SwiperSlide key={index} className='w-full h-full flex items-center justify-center'>
                    {content}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}