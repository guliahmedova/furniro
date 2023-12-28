import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DescriptionType } from '../../models/DescriptionType';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { getProductDescriptionById } from '../../redux/features/productDetailSlice';
import { useParams } from 'react-router-dom';

const DetailTabbedNavigation = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const toggleTabs = (index: number) => {
    setTabIndex(index);
  };

  const productDescription: DescriptionType = useSelector((state: RootState) => state.productDetail.productDescriptions);

  const dispatch = useAppDispatch();

  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      dispatch(getProductDescriptionById(productId));
    }
  }, [dispatch, productId]);

  return (
    <section className="mt-[69px] pt-[46px] pb-[61px] border-t border-b border-[#D9D9D9]">
      <div className='lg:max-w-[1239px] mx-auto lg:px-0 px-3'>
        <div className='flex lg:gap-14 gap-3 lg:justify-center justify-between mb-[37px]'>
          <span onClick={() => toggleTabs(1)} className={`lg:text-2xl text-center ease-in-out duration-300 text-sm ${tabIndex === 1 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Description</span>
          <span onClick={() => toggleTabs(2)} className={`lg:text-2xl text-center ease-in-out duration-300 text-sm flex-shrink-0 ${tabIndex === 2 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Additional Information</span>
          <span onClick={() => toggleTabs(3)} className={`lg:text-2xl text-center ease-in-out duration-300 text-sm flex-shrink-0 ${tabIndex === 3 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Reviews [5]</span>
        </div>

        <div className={`${tabIndex === 1 ? 'block' : 'hidden'}`}>
          <p className='max-w-[1026px] mx-auto text-[#9F9F9F] font-normal tracking-wider'>
            <span className='mb-[30px] block'>
              {productDescription?.introduction}
            </span>
          </p>
          <div className='flex lg:flex-row flex-col gap-7 mt-[36px]'>
            {productDescription?.imageFiles && productDescription?.imageFiles.length > 0 && (
              productDescription?.imageFiles.map((item, index)=> (
                <div key={index} className='lg:w-[605px] h-[348px] rounded-lg bg-[#F9F1E7]'><img className='w-full h-full object-cover rounded-lg' src={item} alt="product-img1" /></div>
              ))
            )}
          </div>
        </div>

        <div className={`max-w-[1026px] mx-auto text-[#9F9F9F] font-normal tracking-wider ${tabIndex === 2 ? 'block' : 'hidden'}`}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo voluptates molestias numquam perspiciatis soluta enim repudiandae praesentium ullam doloremque nam porro reiciendis provident, nisi rem ratione! Eos, corrupti tenetur.</p>
        </div>

        <div className={`max-w-[1026px] mx-auto text-[#9F9F9F] font-normal tracking-wider flex flex-col ${tabIndex === 3 ? 'block' : 'hidden'}`}>
          <span>Review 1</span>
          <span>Review 2</span>
          <span>Review 3</span>
          <span>Review 4</span>
        </div>

      </div>
    </section>
  )
}

export default DetailTabbedNavigation