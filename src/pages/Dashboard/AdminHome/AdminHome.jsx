import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiDollarSign } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })
    // console.log('stats', stats)

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })

    // custom shape for the bar char
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pi chart

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartdata = chartData.map(data => {
        return {name: data.category, value:data.revenue}
    })

    return (
        <div>
            <h2 className='text-3xl mb-5'>
                <span className='mr-2'>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

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
                            <FaRegUser className='text-3xl mr-2' />
                        </div>
                        <div className="stat-value">{stats.users}</div>
                    </div>
                </div>

                <div className="stat bg-green-200">
                    <div className="stat-title text-3xl font-semibold">Orders</div>
                    <div className='flex items-center'>
                        <div className="stat-figure ">

                            <FaHamburger className='text-3xl mr-2' />
                        </div>
                        <div className="stat-value">{stats.orders}</div>
                    </div>
                </div>

                <div className="stat bg-gray-200">
                    <div className="stat-title text-3xl font-semibold">Menu Items</div>
                    <div className='flex items-center'>
                        <div className="stat-figure ">
                            <MdOutlineMenuBook className='text-3xl mr-2' />
                        </div>
                        <div className="stat-value">{stats.menuItems}</div>
                    </div>
                </div>

            </div>

            <div className='flex gap-5 items-center'>
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartdata}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;