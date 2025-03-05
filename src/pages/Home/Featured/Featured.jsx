import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading={"Check it out"} heading={"Featured Item"}>
            </SectionTitle>
            <div className='md:flex justify-center items-center pb-20 py-12 px-36 gap-10 bg-slate-500 opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='space-y-4'>
                    <p>March 20, 2025</p>
                    <p className='text-4xl font-semibold'>WHERE CAN I GET SOME?</p>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga itaque, eligendi nihil eum recusandae temporibus? Corporis dignissimos blanditiis impedit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, similique.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;