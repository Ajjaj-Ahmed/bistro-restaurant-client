import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { TiDelete } from "react-icons/ti";
import { MdOutlineUpdate } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem=(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if(res.data.deletedCount > 0){
                    // refrech to reload data
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
           
            }
          });
    }
    return (
        <div>
            <SectionTitle heading={'Manage All Items'} subHeading={'Hurray Up'}></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* daynamic loop through */}
                            {
                                menu.map( (item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>                                       
                                        <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-16">
                                                    <img
                                                        src={item.image}/>
                                                </div>
                                        </div>                                       
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <th><button className='btn text-2xl bg-green-300'><MdOutlineUpdate /></button></th>

                                    <th><button
                                    onClick={()=>handleDeleteItem(item)}
                                     className='btn bg-red-300 text-2xl'><TiDelete /></button></th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;