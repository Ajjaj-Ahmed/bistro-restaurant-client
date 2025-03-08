import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa"


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                subHeading={"What Our Client say"}
                heading={"Testimonials"}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center space-y-4 w-9/12 mx-auto'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='text-4xl'><FaQuoteLeft /></p>
                            <p>{review.details}</p>
                            <p className='text-4xl text-yellow-600'>{review.name}</p>
                        </div>

                    </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;