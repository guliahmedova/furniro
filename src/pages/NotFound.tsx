import sadFace from '../assets/images/sad-circle.svg';

const NotFound = () => {
    return (
        <section className="bg-white py-28">
            <div className='flex justify-center text-[#9F9F9F] flex-col items-center gap-3 select-none'>
                <img src={sadFace} alt="emoji" className='w-20 h-20' />
                <span className='font-medium text-5xl'>404</span>
                <span>Page not found</span>
                <p className='font-medium'>The Page you are looking for doesn't exist or an other error occured.</p>
            </div>
        </section>
    )
}

export default NotFound;