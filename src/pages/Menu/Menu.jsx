import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertsBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'

import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}>
            </SectionTitle>
            {/* offer menu items */}

            <MenuCategory items={offered} 
            order={'Order Your Favourite Food'}
            title={'offered'}
            ></MenuCategory>

            {/* desserts items */}
            <div className='my-10'>
                <div className='my-3'>
                <Cover img={dessertsBg} title={"dessert"}></Cover>
                </div>
                <MenuCategory
                    items={desserts}
                    order={"Order Deserts"}
                    title={"dessert"}
                ></MenuCategory>
            </div>
            {/* Pizza items */}
            <div className='my-10'>
                <div className='my-3'>
                <Cover img={pizzaBg} title={"pizza"}></Cover>
                </div>
                <MenuCategory
                    items={pizza}
                    order={"Order Pizza"}
                    title={"pizza"}
                ></MenuCategory>
            </div>
            {/* Salad items */}
            <div className='my-10'>
                <div className='my-3'>
                <Cover img={saladBg} title={"salad"}></Cover>
                </div>
                <MenuCategory
                    items={salad}
                    order={"Order Salads"}
                    title={"salad"}
                ></MenuCategory>
            </div>
            {/* Salad items */}
            <div className='my-10'>
                <div className='my-3'>
                <Cover img={saladBg} title={"Soup"}></Cover>
                </div>
                <MenuCategory
                    items={soup}
                    order={"Order Soup"}
                    title={"Soup"}
                ></MenuCategory>
            </div>

        </div>
    );
};

export default Menu;