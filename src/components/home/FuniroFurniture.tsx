import r1 from '../../assets/images/Rectangle1.svg';
import r2 from '../../assets/images/Rectangle2.svg';
import r3 from '../../assets/images/Rectangle3.svg';
import r4 from '../../assets/images/Rectangle4.svg';
import r5 from '../../assets/images/Rectangle5.svg';
import r6 from '../../assets/images/Rectangle6.svg';
import r7 from '../../assets/images/Rectangle7.svg';
import r8 from '../../assets/images/Rectangle8.svg';
import r9 from '../../assets/images/Rectangle9.svg';

const FuniroFurniture = () => {
    return (
        <section className="w-full mb-[50px] h-full">
            <div className="text-center">
                <span className="text-[#616161] font-semibold text-xl leading-7">Share your setup with</span>
                <h1 className="text-[#3A3A3A] font-bold text-[40px] leading-[48px]">#FuniroFurniture</h1>
            </div>

            <div className='flex justify-between gap-4 w-full h-screen overflow-hidden'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div><img src={r1} alt="" /></div>
                        <div className='flex place-items-end'><img src={r2} alt="" /></div>
                    </div>
                    <div className='flex gap-4'>
                        <div><img src={r6} alt="" /></div>
                        <div><img src={r7} alt="" /></div>
                    </div>
                </div>


                <div className='flex place-items-center h-auto'>
                    <div><img src={r3} alt="" /></div>
                </div>


                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div className='flex place-items-end'><img src={r4} alt="" /></div>
                        <div><img src={r5} alt="" /></div>
                    </div>
                    <div className='flex gap-4'>
                        <div><img src={r8} alt="" /></div>
                        <div><img src={r9} alt="" /></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FuniroFurniture;