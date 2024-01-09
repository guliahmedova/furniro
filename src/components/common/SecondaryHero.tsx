import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/images/search.svg';
import heroArrow from '../../assets/images//heroArrow.svg';
import { SecondaryHeroType } from '../../models/SecondaryHeroType';

const SecondaryHero: FC<SecondaryHeroType> = ({ title, logo, isSearch, searchText, saveSearchText }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    saveSearchText && saveSearchText(text);
  };

  const memoizedSearchText = useMemo(() => {
    return searchText;
  }, [searchText]);

  return (
    <section className='lg:h-[31vh] flex justify-center md:mg-top items-center bg-hero-image w-full bg-no-repeat bg-fix bg-center bg-cover'>
      <div className='text-center w-full lg:py-0 py-6'>
        <img src={logo} className='mx-auto' alt='' />
        <h1 className='lg:text-[48px] font-medium lg:leading-[72px] select-none md:text-2xl text-xl'>{title}</h1>
        <div className='flex items-center leading-6 gap-[6px] justify-center'>
          <Link to="/" className='font-medium lg:text-base text-sm'>Home</Link>
          <img src={heroArrow} alt="arrow-icon" />
          <span className='lg:text-base font-normal text-[#000000] select-none text-sm'>{title}</span>
        </div>
        {
          isSearch && (
            <form className='mt-6 xl:w-[30%] w-[50%] mx-auto lg:px-0 px-3 relative' onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                id="name"
                value={memoizedSearchText}
                onChange={handleInputChange}
                className="border-2 w-full lg:text-base rounded-xl outline-0 py-[10px] px-[31px] border-[#9F9F9F]"
                placeholder="Search..."
                required
              />
              <img src={searchIcon} alt="search-icon" className='absolute z-10 bg-white right-6 top-3 w-6 h-6 opacity-30' />
            </form>
          )
        }
      </div>
    </section>
  )
};

export default SecondaryHero;
