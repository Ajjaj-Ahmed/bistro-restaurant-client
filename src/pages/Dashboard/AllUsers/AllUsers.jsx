import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle subHeading={"How many"} heading={"MANAGE ALL USERS"}>
            </SectionTitle>
            <div>
                <h2 className='text-3xl font-semibold'>TOTAL USERS: {users.length}</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index)=><tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>Blue</td>
                                </tr>
                              )}
                                                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;