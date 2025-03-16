import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineCalendarMonth, MdOutlineHome, MdOutlineList, MdOutlineReviews, MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-4">
            <li className=''>                
                <NavLink to={'/dashboard/userHome'}>
                <MdOutlineHome className='text-white' /> 
                 User Home</NavLink>
            </li>
            <li>                
                <NavLink to={'/dashboard/reservatuib'}>
                <MdOutlineCalendarMonth className='text-white' /> 
                 Reservation</NavLink>
            </li>
            <li>                
                <NavLink to={'/dashboard/cart'}>
                <MdOutlineShoppingCart className='text-white' /> 
                 My Cart</NavLink>
            </li>
            <li>                
                <NavLink to={'/dashboard/review'}>
                <MdOutlineReviews className='text-white' /> 
                 Add Review</NavLink>
            </li>
            <li>                
                <NavLink to={'/dashboard/bookings'}>
                <MdOutlineList className='text-white' /> 
                 My Bookings</NavLink>
            </li>
            <div class="divider"></div>
            <li className=''>                
                <NavLink to={'/'}>
                <MdOutlineHome className='text-white' /> 
                 Home</NavLink>
            </li>
            <li className=''>                
                <NavLink to={'/order/salad'}>
                <MdOutlineSearch className='text-white' /> 
                 Menu</NavLink>
            </li>
        </ul>
            </div>
            {/* Dashboard sidebar */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;