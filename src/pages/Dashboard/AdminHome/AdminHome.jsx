import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiDollarSign } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";


const AdminHome = () => {
    // const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    // console.log('stats', stats)
    return (
        <div>
            {/* <h2 className='text-3xl'>
                <span className='mr-2'>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2> */}

            <div className="stats shadow">
                <div className="stat bg-pink-200">
                    <div className="stat-title text-3xl font-semibold">Revenue</div>
                    <div className='flex items-center'>
                        <div className="stat-figure ">
                            <FiDollarSign className='text-3xl' />
                        </div>
                        <div className="stat-value">{stats.revenue}</div>
                    </div>
                </div>
                
                <div className="stat bg-orange-200">
                    <div className="stat-title text-3xl font-semibold">Users</div>
                    <div className='flex items-center'>
                        <div className="stat-figure ">
                        <FaRegUser className='text-3xl mr-2'/>                          
                        </div>
                        <div className="stat-value">{stats.users}</div>
                    </div>
                </div>

                <div className="stat bg-green-200">
                    <div className="stat-title text-3xl font-semibold">Orders</div>
                    <div className='flex items-center'>
                        <div className="stat-figure ">
                            
                        <FaHamburger className='text-3xl mr-2'/>
                        </div>
                        <div className="stat-value">{stats.orders}</div>
                    </div>
                </div>

                <div className="stat bg-gray-200">
                    <div className="stat-title text-3xl font-semibold">Menu Items</div>
                    <div className='flex items-center'>
                        <div className="stat-figure ">
                        <MdOutlineMenuBook className='text-3xl mr-2'/>
                        </div>
                        <div className="stat-value">{stats.menuItems}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;