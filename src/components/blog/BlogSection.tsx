import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import admin from '../../assets/images/admin.svg';
import date from '../../assets/images/date.svg';
import search from '../../assets/images/search.svg';
import wood from '../../assets/images/wood.svg';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { getBlogCategories, getBlogs, getRecentBlogs } from '../../redux/features/blogSlice';
import { Pagination } from '../common/index';

const BlogSection = () => {
    const blogs = useSelector((state: RootState) => state.blog.blogs);
    const loading = useSelector((state: RootState) => state.blog.loading);
    const currentpage = useSelector((state: RootState) => state.pagination.currentPage);
    const categories = useSelector((state: RootState) => state.blog.categories);
    const recentBlogs = useSelector((state: RootState) => state.blog.recentBlogs);
    const dispatch = useAppDispatch();

    const totalCount = useSelector((state: RootState) => state.blog.totalCount);
    const perPage = 8;

    useEffect(() => {
        dispatch(getBlogs({ page: currentpage, take: perPage }));
    }, [dispatch, currentpage]);

    useEffect(() => {
        dispatch(getBlogCategories());
        dispatch(getRecentBlogs());
    }, [dispatch]);

    return (
        <section className='mt-[106px] mb-[58px]'>
            <div className='flex gap-7 xl:flex-row flex-col-reverse w-[85%] mx-auto'>
                <div className='flex flex-col gap-[54px]'>
                    {
                        loading === 'pending' ? (
                            <div className="text-center h-full w-full flex items-center justify-center">
                                <div role="status">
                                    <svg aria-hidden="true" className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-[#B88E2F]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            blogs?.map(item => (
                                <div key={item?.id}>
                                    <div className='mb-[17px] lg:w-[817px] lg:h-[500px]'>
                                        <img src={item?.imageUrls[0]} alt="card-image" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex lg:gap-9 items-center mb-4 lg:justify-normal justify-between'>
                                        <div className='flex lg:gap-2 items-center'>
                                            <img src={admin} alt="admin-icon" /> <span className='text-sm lg:text-base'>{item?.adminInfo?.roleName}</span>
                                        </div>
                                        <div className='flex lg:gap-2 items-center'>
                                            <img src={date} alt="date-icon" /> <span className='text-sm lg:text-base'>{item?.createdDate}</span>
                                        </div>
                                        <div className='flex lg:gap-2 items-center'>
                                            <img src={wood} alt="wood-icon" /> <span className='text-sm lg:text-base'>{item?.category?.categoryName}</span>
                                        </div>
                                    </div>
                                    <div className='mb-[30px]'>
                                        <h1 className='text-black font-medium lg:text-3xl text-lg leading-10 mb-3 truncate'>{item?.header}</h1>
                                        <p className='text-[#9F9F9F] lg:text-[15px] lg:max-w-[817px] lg:tracking-wider mb-7 truncate'>{item?.text}</p>
                                        <span className='text-black border-b-2 border-black pb-3'>Read more</span>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>

                <div className='lg:sticky lg:top-5 self-start w-full'>
                    <form className='border-2 border-[#9F9F9F] relative rounded-[10px] lg:h-14 mb-11 lg:w-[80%] w-full mx-auto'>
                        <input type="text" className='w-full h-full rounded-[10px] outline-0 border-0 p-3' />
                        <button className='absolute lg:top-[17px] top-[10px] right-3 w-5 h-5 z-10 bg-white'><img src={search} alt="search-icon" /></button>
                    </form>
                    <div className='mx-auto mb-10 px-12'>
                        <h1 className='text-black font-medium text-2xl mb-8'>Categories</h1>
                        <div className='overflow-y-scroll h-80 | categories px-2'>
                            {categories?.map(item => (
                                <div key={item?.id} className='flex justify-between mb-10'>
                                    <span className='text-[#9F9F9F]'>{item?.categoryName}</span>
                                    <span className='text-[#9F9F9F]'>{item?.blogCount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=' mx-auto mb-10 mt-24 lg:px-[20%]'>
                        <h1 className='text-black font-medium text-2xl mb-8'>Recent Posts</h1>
                        <div className='flex flex-col gap-10'>
                            {recentBlogs?.map(item => (
                                <div key={item?.id} className='flex gap-3 items-center'>
                                    <img src={item?.imageUrls[0]} alt="recent-post-card-image" className='w-20 h-20 object-cover rounded-lg bg-red-500' />
                                    <div className='flex flex-col'>
                                        <span className='text-black font-medium leading-5'>{item?.header}</span>
                                        <span className='text-[#9F9F9F] text-xs mt-1'>{item?.createdDate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Pagination page={perPage} total={totalCount} />
        </section>
    )
}

export default BlogSection;