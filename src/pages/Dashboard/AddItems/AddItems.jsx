import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/useAxiosPublic'


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imagbb and then get an url
        const imageFile = {image : data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'content-type':'multipart/form-data'
            }
        });
        console.log(res.data);
    };
    return (
        <div>
            <SectionTitle heading={'Add AN ITEM'} subHeading={"---what's new?---"}></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>

                <fieldset className="fieldset w-full mb-4">
                    <legend className='fieldset-legend'>Recipe Name?</legend>
                    <input type="text" className="input w-full"
                        placeholder="Recipe Name"  {...register("name")} />
                </fieldset>

                <div className='flex gap-4 mb-4'>
                    {/* category */}
                    <fieldset className="fieldset w-full">
                        <legend className='fieldset-legend'>Category</legend>
                        <select
                            defaultValue={'default'}
                            {...register("category", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled={true} value={'default'}>Select a Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drniks">Drinks</option>
                            <option value="popular">Popular</option>
                            <option value="offered">Offered</option>
                        </select>
                    </fieldset>
                    {/* price */}
                    <fieldset className="fieldset w-full">
                        <legend className='fieldset-legend'>Price</legend>
                        <input type="text" className="input w-full"
                            placeholder="Price"  {...register("price", { required: true })} />
                    </fieldset>
                </div>
                {/* recipe details */}
                <fieldset className="fieldset w-full mb-4 ">
                    <legend className='fieldset-legend'>Recipe Details</legend>
                    <textarea className="textarea w-full" placeholder="Recipe Details" {...register("recipe", { required: true })}></textarea>
                </fieldset>
                {/* image upload */}
                <fieldset className="fieldset w-full mb-4">
                    <input type="file" className="file-input file-input-ghost" {...register("image", { required: true })} />
                </fieldset>

                <div className='text-center'>
                    <button className='btn btn-success'>Add Item <FaUtensils /></button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;