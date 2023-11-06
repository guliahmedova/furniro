import { Link } from 'react-router-dom';
import heroArrow from '../../assets/images//heroArrow.svg';
import { ISecondaryHeroTypes } from '../../models/secondaryHeroTypes';
import React from 'react';

const SecondaryHero:React.FC<ISecondaryHeroTypes> = ({title, logo}) => {
  return (
    <section className='h-[40vh] flex justify-center items-center bg-hero-image w-full bg-no-repeat bg-fix bg-center bg-cover'>
      <div className='text-center'>
        <img src={logo} className='mx-auto' alt="" />
        <h1 className='text-[48px] font-medium leading-[72px] select-none'>{title}</h1>
        <div className='flex items-center leading-6 gap-[6px] justify-center'>
          <Link to="/" className='font-medium text-[1rem]'>Home</Link>
          <img src={heroArrow} alt="" />
          <span className='text-[1rem] font-normal text-[#000000] select-none'>{title}</span>
        </div>
      </div>
    </section>
  )
}

export default SecondaryHero