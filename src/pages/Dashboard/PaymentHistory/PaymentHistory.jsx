import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: payments=[] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading={"Payment History"} subHeading={'Your payments, order status'}></SectionTitle>
            <h2 className='text-3xl py-5'>Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-center text-2xl'>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-center text-xl'>
                        {payments.map((payment, index)=> <tr key={payment._id}>
                            <th>{index +1}</th>
                            <td>$ {payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;