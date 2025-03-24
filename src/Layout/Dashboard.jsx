import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineCalendarMonth, MdOutlineEmail, MdOutlineHome, MdOutlineHomeMax, MdOutlineList, MdOutlineReviews, MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
// import useCart from '../hooks/useCart';
import { IoHomeOutline } from "react-icons/io5";
import { FaBook, FaUsers, FaUtensils } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4 text-xl">
                    {
                        isAdmin ?
                            <>
                                {/* admin part */}
                                <li>
                                    <NavLink to={'/dashboard/adminHome'}>
                                        <IoHomeOutline className='text-white' />
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addItems'}>
                                        <FaUtensils className='text-white' />
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/cart'}>
                                        <MdOutlineShoppingCart className='text-white' />
                                        My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageItems'}>
                                        <CiCircleList className='text-white' />
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/bookings'}>
                                        <FaBook className='text-white' />
                                        Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/users'}>
                                        <FaUsers className='text-white' />
                                        All Users</NavLink>
                                </li>
                            </> :
                            // user part
                            <>
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
                            </>
                    }
                    <div class="divider"></div>

                    {/* Shared Navlinks */}
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
                    <li className=''>
                        <NavLink to={'/order/salad'}>
                            <MdOutlineEmail className='text-white' />
                            Contact</NavLink>
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