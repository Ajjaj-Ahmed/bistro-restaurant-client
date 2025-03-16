import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineCalendarMonth, MdOutlineHome, MdOutlineList, MdOutlineReviews, MdOutlineShoppingCart } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className='flex items-center'>
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
        </ul>
            </div>
            {/* Dashboard sidebar */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;