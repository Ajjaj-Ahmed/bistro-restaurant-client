import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
    },[])
    return (
        <div className='mb-12'>
            <SectionTitle 
            heading={"From our Menu"}
            subHeading={"Popular Items"}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;