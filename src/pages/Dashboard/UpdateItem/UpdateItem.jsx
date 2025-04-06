import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const item = useLoaderData();
    console.log(item)
    
    

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imagbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await useAxiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await useAxiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset();
                // sweet alert
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };
    return (
        <div>
            <SectionTitle heading={'Update Item'} subHeading={'Refresh Info'}>
            </SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset w-full mb-4">
                        <legend className='fieldset-legend'>Recipe Name?</legend>
                        <input type="text"  className="input w-full"
                            placeholder="Recipe Name"  {...register("name")} />
                    </fieldset>

                    <div className='flex gap-4 mb-4'>
                        {/* category */}
                        <fieldset className="fieldset w-full">
                            <legend className='fieldset-legend'>Category</legend>
                            <select
                               
                                {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled={true} value={'default'}>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
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
                        <button className='btn btn-success'>Update Item <FaUtensils /></button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;