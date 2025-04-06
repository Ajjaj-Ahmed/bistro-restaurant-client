import React from 'react';
import useCart from '../../../hooks/useCart';
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className='flex justify-evenly'>
                <h2 className='text-4xl'>Items: {cart.length}</h2>
                <h2 className='text-4xl'>Total Price : {totalPrice}</h2>
                {cart.length ? <Link to={'/dashboard/payment'}><button className='btn btn-primary'>Pay</button></Link> : <button disabled className='btn btn-primary'>Pay</button> }
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-semibold bg-amber-300'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-16 w-16">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <p className='text-2xl font-semibold'>{item.name}</p>
                                </td>

                                <td className='text-2xl'>{item.price} $</td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className='btn bg-red-300'><MdDeleteForever className='text-2xl' /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;