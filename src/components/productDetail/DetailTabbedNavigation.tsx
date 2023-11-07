import sofa1 from '../../assets/images/sofa1.svg';
import sofa2 from '../../assets/images/sofa2.svg';
import { useState } from 'react';

const DetailTabbedNavigation = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const toggleTabs = (index: number) => {
    setTabIndex(index);
  };

  return (
    <section className="mt-[69px] pt-[46px] pb-[61px] border-t-2 border-b-2 border-[#D9D9D9]">
      <div className='max-w-[1239px] mx-auto'>
        <div className='flex gap-14 justify-center mb-[37px]'>
          <span onClick={() => toggleTabs(1)} className={`text-2xl leading-normal ease-in-out duration-300 ${tabIndex === 1 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Description</span>
          <span onClick={() => toggleTabs(2)} className={`text-2xl leading-normal ease-in-out duration-300 ${tabIndex === 2 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Additional Information</span>
          <span onClick={() => toggleTabs(3)} className={`text-2xl leading-normal ease-in-out duration-300 ${tabIndex === 3 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Reviews [5]</span>
        </div>

        <div className={`${tabIndex === 1 ? 'block' : 'hidden'}`}>
          <p className='max-w-[1026px] mx-auto text-[#9F9F9F] font-normal text-[1rem] tracking-wider'>
            <span className='mb-[30px] block'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</span>
            <span>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</span>
          </p>
          <div className='flex gap-7 mt-[36px]'>
            <div className='w-[605px] h-[348px] rounded-lg bg-[#F9F1E7]'><img className='w-full h-full object-contain' src={sofa1} alt="" /></div>
            <div className='w-[605px] h-[348px] rounded-lg bg-[#F9F1E7]'><img className='w-full h-full object-contain' src={sofa2} alt="" /></div>
          </div>
        </div>

        <div className={`max-w-[1026px] mx-auto text-[#9F9F9F] font-normal text-[1rem] tracking-wider ${tabIndex === 2 ? 'block' : 'hidden'}`}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo voluptates molestias numquam perspiciatis soluta enim repudiandae praesentium ullam doloremque nam porro reiciendis provident, nisi rem ratione! Eos, corrupti tenetur.</p>
        </div>

        <div className={`max-w-[1026px] mx-auto text-[#9F9F9F] font-normal text-[1rem] tracking-wider flex flex-col ${tabIndex === 3 ? 'block' : 'hidden'}`}>
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