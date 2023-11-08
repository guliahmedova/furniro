import r1 from '../../assets/images/Rectangle1.png';
import r2 from '../../assets/images/Rectangle2.png';
import r3 from '../../assets/images/Rectangle3.png';
import r4 from '../../assets/images/Rectangle4.png';
import r5 from '../../assets/images/Rectangle5.png';
import r6 from '../../assets/images/Rectangle6.png';
import r7 from '../../assets/images/Rectangle7.png';
import r8 from '../../assets/images/Rectangle8.png';
import r9 from '../../assets/images/Rectangle9.png';

const FuniroFurniture = () => {
    return (
        <section className="w-full mb-[50px] h-full">
            <div className="text-center">
                <span className="text-[#616161] font-semibold lg:text-xl lg:leading-7 sm:text-lg text-md">Share your setup with</span>
                <h1 className="text-[#3A3A3A] font-bold lg:text-[40px] lg:leading-[48px] text-lg">#FuniroFurniture</h1>
            </div>

            <div className='flex justify-between gap-4 w-full h-screen overflow-hidden lg:mt-0 mt-4'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div className='w-[68px] h-[382px]'><img className='w-full h-full object-cover' src={r1} alt="" /></div>
                        <div className='flex place-items-end w-[451px]'><img className='w-full h-[312px] object-cover' src={r2} alt="" /></div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[175px] h-[323px]'><img className='w-full h-full object-cover' src={r6} alt="" /></div>
                        <div className='w-[344px] h-[242px]'><img className='w-full h-full object-cover' src={r7} alt="" /></div>
                    </div>
                </div>


                <div className='flex place-items-center'>
                    <div className='w-[295px] h-[392px]'><img className='w-full h-full object-cover' src={r3} alt="" /></div>
                </div>


                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div className='flex place-items-end w-[290px]'><img className='w-full h-[348px] object-cover' src={r4} alt="" /></div>
                        <div className='w-[380px] h-[433px]'><img className='w-full h-full object-cover' src={r5} alt="" /></div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[178px] h-[242px]'><img className='w-full h-full object-cover' src={r8} alt="" /></div>
                        <div className='w-[258px] h-[196px]'><img className='w-full h-full object-cover' src={r9} alt="" /></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FuniroFurniture;