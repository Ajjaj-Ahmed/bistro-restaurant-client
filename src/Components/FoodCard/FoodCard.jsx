import React from 'react';

const FoodCard = ({ item }) => {
    const {name,image,price,recipe} = item;
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
                    <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400  mt-4">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;