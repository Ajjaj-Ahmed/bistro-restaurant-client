import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';


const MenuCategory = ({ items, order, title }) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center pt-5 mt-4'>
                <Link to={`/order/${title}`}>
                    <button className='btn border-b-4'>{order}</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;