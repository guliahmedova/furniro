import admin from '../../assets/images/admin.svg';
import date from '../../assets/images/date.svg';
import wood from '../../assets/images/wood.svg';
import search from '../../assets/images/search.svg';
import { blogs } from '../../assets/const/blogDatas';
import { blogCategories } from '../../assets/const/blogCategories';
import { recentPosts } from '../../assets/const/recentPosts';
import Pagination from '../common/Pagination';

const BlogSection = () => {
    return (
        <section className='mt-[106px] mb-[58px]'>
            <div className='max-w-[1240px] mx-auto flex gap-[30px] lg:flex-row flex-col lg:px-0 px-3'>
                <div className='flex flex-col gap-[54px]'>
                    {
                        blogs.map(item => (
                            <div key={item.id}>
                                <div className='mb-[17px] lg:w-[817px] lg:h-[500px]'>
                                    <img src={item.img} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='flex gap-9 items-center mb-4'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={admin} alt="" /> <span>Admin</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src={date} alt="" /> <span>14 Oct 2022</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src={wood} alt="" /> <span>Wood</span>
                                    </div>
                                </div>
                                <div className='mb-[30px]'>
                                    <h1 className='text-black font-medium lg:text-3xl text-lg leading-10 mb-3'>{item.title}</h1>
                                    <p className='text-[#9F9F9F] lg:text-[15px] lg:max-w-[817px] lg:tracking-wider mb-7'>{item.desc}</p>
                                    <span className='text-black border-b-2 border-black pb-3'>Read more</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <form className='border-2 border-[#9F9F9F] relative rounded-[10px] lg:h-14 mb-11 lg:max-w-[311px] mx-auto'>
                        <input type="text" className='w-full h-full rounded-[10px] outline-0 border-0 p-3' />
                        <button className='absolute lg:top-[17px] top-[10px] right-3 w-5 h-5 z-10 bg-white'><img src={search} alt="" /></button>
                    </form>
                    <div className='lg:px-[65px] mx-auto mb-10 px-3'>
                        <h1 className='text-black font-medium text-2xl mb-8'>Categories</h1>
                        <div>
                            {blogCategories.map(item => (
                                <div key={item.id} className='flex justify-between mb-10'>
                                    <span className='text-[#9F9F9F]'>{item.title}</span>
                                    <span className='text-[#9F9F9F]'>{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:px-[65px] mx-auto mb-10 mt-24 px-3'>
                        <h1 className='text-black font-medium text-2xl mb-8'>Recent Posts</h1>
                        <div className='flex flex-col gap-10'>
                            {recentPosts.map(item => (
                                <div key={item.id} className='flex gap-3 items-center'>
                                    <img src={item.img} alt="" />
                                    <div className='flex flex-col'>
                                        <span className='text-black font-medium leading-5'>{item.title}</span>
                                        <span className='text-[#9F9F9F] text-xs mt-1'>{item.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </section>
    )
}

export default BlogSection;