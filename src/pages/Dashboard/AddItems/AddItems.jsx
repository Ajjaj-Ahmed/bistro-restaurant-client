import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form"



const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div>
            <SectionTitle heading={'Add AN ITEM'} subHeading={"---what's new?---"}></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register("name")} />
                <label>Item Category</label>

                <select 
                {...register("category")}  
                className="select">
                    <option disabled={true}>Select a Category</option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drniks">Drinks</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItems;