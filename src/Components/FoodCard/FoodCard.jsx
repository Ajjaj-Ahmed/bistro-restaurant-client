import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const FoodCard = ({ item }) => {
    const {name,image,price,recipe,_id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiousSecure = useAxiosSecure()

    const handleAddtoCard = (food) =>{
       if(user && user.email){
        const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
        }
        axiousSecure.post('/carts',cartItem)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to your cart`,
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
        })
       }
       else{
        Swal.fire({
            title: "You are not logged In",
            text: "Please login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login' ,{state:{from:location}})
            }
          });
       }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="food" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-xl'>{price} $</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddtoCard(item)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400  mt-4">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;