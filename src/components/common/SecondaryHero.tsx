import { Link } from 'react-router-dom';
import heroArrow from '../../assets/images//heroArrow.svg';
import { ISecondaryHeroTypes } from '../../models/secondaryHeroTypes';
import React from 'react';

const SecondaryHero: React.FC<ISecondaryHeroTypes> = ({ title, logo, isSearch }) => {
  return (
    <section className='h-[316px] flex justify-center items-center bg-hero-image w-full bg-no-repeat bg-fix bg-center bg-cover'>
      <div className='text-center w-full'>
        <img src={logo} className='mx-auto' alt="" />
        <h1 className='text-[48px] font-medium leading-[72px] select-none'>{title}</h1>
        <div className='flex items-center leading-6 gap-[6px] justify-center'>
          <Link to="/" className='font-medium text-[1rem]'>Home</Link>
          <img src={heroArrow} alt="" />
          <span className='text-[1rem] font-normal text-[#000000] select-none'>{title}</span>
        </div>
        {
          isSearch && (
            <form className='mt-6 w-4/12 mx-auto'>
              <input type="text" id="name" className="border-2 w-full text-[1rem] rounded-md outline-0 py-[10px] px-[31px] border-[#9F9F9F]" placeholder="Search..." required />
            </form>
          )
        }
      </div>
    </section>
  )
}

export default SecondaryHero