import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <div className='mb-12'>
            <SectionTitle 
            heading={"From our Menu"}
            subHeading={"Popular Items"}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center pt-5'>
            <button className='btn border-b-4'>Show more!</button>
            </div>
        </div>
    );
};

export default PopularMenu;