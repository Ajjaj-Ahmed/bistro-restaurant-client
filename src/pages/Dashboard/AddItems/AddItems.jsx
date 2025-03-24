import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form"

// DB_USER=bossUser
// DB_PASS=9Tq6ly9bCt38rZm6
// ACCESS_TOKEN_SECRET=875043790f2b3919b6ef159dc0120049ec31c2409083694f524d382aefcbad1279ca6f1aafba819d4b6488ea98090340ef8dd283c9707d07c491a03f11bf9809


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