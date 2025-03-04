import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11.00 to 10.00 pm"}
            heading={"Order Online"}>
                
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-6"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h2 className='-mt-16 text-4xl text-center text-white'>SALADS</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h2 className='-mt-16 text-4xl text-center text-white'>PIZZA</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h2 className='-mt-16 text-4xl text-center text-white'>SOUP</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h2 className='-mt-16 text-4xl text-center text-white'>DESSERTS</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h2 className='-mt-16 text-4xl text-center text-white'>SALADS</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;