import { Link } from 'react-router-dom';
import heroArrow from '../../assets/images//heroArrow.svg';
import { ISecondaryHeroTypes } from '../../models/secondaryHeroTypes';
import { FC } from 'react';

const SecondaryHero: FC<ISecondaryHeroTypes> = ({ title, logo, isSearch, addSearchText, searchText }) => {
  return (
    <section className='lg:h-[316px] flex justify-center md:mg-top items-center bg-hero-image w-full bg-no-repeat bg-fix bg-center bg-cover'>
      <div className='text-center w-full lg:py-0 py-6'>
        <img src={logo} className='mx-auto' alt="" />
        <h1 className='lg:text-[48px] font-medium lg:leading-[72px] select-none md:text-2xl text-xl'>{title}</h1>
        <div className='flex items-center leading-6 gap-[6px] justify-center'>
          <Link to="/" className='font-medium lg:text-base text-sm'>Home</Link>
          <img src={heroArrow} alt="" />
          <span className='lg:text-base font-normal text-[#000000] select-none text-sm'>{title}</span>
        </div>
        {
          isSearch && (
            <form className='mt-6 lg:w-4/12 mx-auto lg:px-0 px-3'>
              <input type="text" id="name"
                value={searchText}
                onChange={(event) => addSearchText && addSearchText(event?.target?.value)}
                className="border-2 w-full lg:text-base rounded-xl outline-0 py-[10px] px-[31px] border-[#9F9F9F]"
                placeholder="Search..." required />
            </form>
          )
        }
      </div>
    </section>
  )
}

export default SecondaryHero;