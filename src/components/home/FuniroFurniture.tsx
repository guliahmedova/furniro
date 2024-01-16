import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { useEffect } from 'react';
import { getGridImages } from '../../redux/features/homeSlice';

const FuniroFurniture = () => {
    const gridImages = useSelector((state: RootState) => state.home.images);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGridImages());
    }, [dispatch]);

    return (
        <section className="w-full mb-[50px] h-full overflow-hidden">
            <div className="text-center">
                <span className="text-[#616161] font-semibold lg:text-xl lg:leading-7 sm:text-lg text-md">Share your setup with</span>
                <h1 className="text-[#3A3A3A] font-bold lg:text-[40px] lg:leading-[48px] text-lg">#FuniroFurniture</h1>
            </div>

            <div className="parent h-[100vh] overflow-hidden min-w-[750px]">
                {gridImages?.map((item) => (
                    <img src={item.imageUrls[0]} key={item.id} alt="" className='w-full h-full object-cover' />
                ))}
            </div>
        </section>
    )
}

export default FuniroFurniture;