import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import admin from '../../assets/images/admin.svg';
import date from '../../assets/images/date.svg';
import search from '../../assets/images/search.svg';
import wood from '../../assets/images/wood.svg';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { getBlogCategories, getBlogs, getRecentBlogs } from '../../redux/features/blogSlice';
import { Pagination } from '../common/index';

const BlogSection = () => {
    const { blogs, categories, recentBlogs, totalCount } = useSelector((state: RootState) => state.blog);

    const currentpage = useSelector((state: RootState) => state.pagination.currentPage);
    const [searchText, setSearchText] = useState('');
    const [categoryID, setCategoryID] = useState(0);

    const dispatch = useAppDispatch();
    const perPage = 9;

    useEffect(() => {
        dispatch(getBlogs({ page: currentpage, take: perPage, prompt: searchText, categoryId: categoryID }));
    }, [dispatch, currentpage, searchText, categoryID]);

    useEffect(() => {
        dispatch(getBlogCategories());
        dispatch(getRecentBlogs());
    }, [dispatch]);

    return (
        // <section className='mt-[106px] mb-[58px]'>
        //     <div className='flex justify-between xl:flex-row flex-col-reverse w-[85%] mx-auto'>
        //         <div className='xl:w-6/12'>
        //             {
        //                 blogs?.length > 0 ? (
        //                     blogs?.map(item => (
        //                         <div key={item?.id} className='w-full'>
        //                             <div className='mb-[17px] lg:w-[817px] lg:h-[500px]'>
        //                                 <img src={item?.imageUrls[0]} alt="card-image" className='w-full h-full object-cover' />
        //                             </div>
        //                             <div className='flex lg:gap-9 items-center mb-4 lg:justify-normal justify-between'>
        //                                 <div className='flex lg:gap-2 items-center'>
        //                                     <img src={admin} alt="admin-icon" /> <span className='text-sm lg:text-base text-[#9F9F9F]'>{item?.adminInfo?.roleName}</span>
        //                                 </div>
        //                                 <div className='flex lg:gap-2 items-center'>
        //                                     <img src={date} alt="date-icon" /> <span className='text-sm lg:text-base text-[#9F9F9F]'>{moment(item?.createdDate).format('DD MMM YYYY')}</span>
        //                                 </div>
        //                                 <div className='flex lg:gap-2 items-center'>
        //                                     <img src={wood} alt="wood-icon" /> <span className='text-sm lg:text-base text-[#9F9F9F]'>{item?.category?.categoryName}</span>
        //                                 </div>
        //                             </div>
        //                             <div className='mb-[30px]'>
        //                                 <h1 className='text-black font-medium lg:text-3xl text-lg leading-10 mb-3 truncate'>{item?.header}</h1>
        //                                 <p className='text-[#9F9F9F] lg:text-[15px] lg:max-w-[817px] lg:tracking-wider mb-7 truncate'>{item?.text}</p>
        //                                 <span className='text-black border-b-2 border-black pb-3'>Read more</span>
        //                             </div>
        //                         </div>
        //                     ))
        //                 ) : (
        //                     <div className="py-28 flex justify-center items-center flex-col gap-3">
        //                         <span className="text-red-700 font-bold text-2xl">There is no blog</span>
        //                     </div>
        //                 )
        //             }
        //         </div>

        //         <div className='lg:sticky lg:top-5 self-start xl:w-4/12'>
        //             <form onSubmit={(e) => e.preventDefault()} className='border-2 border-[#9F9F9F] relative rounded-[10px] lg:h-14 mb-11 lg:w-[80%] w-full mx-auto'>
        //                 <input type="text" value={searchText} name='searchText' onChange={(e) => setSearchText(e.target.value)} className='w-full h-full rounded-[10px] outline-0 border-0 p-3' />
        //                 <button type='submit' className='absolute lg:top-[17px] top-[10px] right-3 w-5 h-5 z-10 bg-white'>
        //                     <img src={search} alt="search-icon" />
        //                 </button>
        //             </form>
        //             <div className='mx-auto mb-10 px-12'>
        //                 <h1 className='text-black font-medium text-2xl mb-8'>Categories</h1>
        //                 <div className='overflow-y-scroll h-80 | categories px-2'>
        //                     {categories?.map(item => (
        //                         <div key={item?.id} className='flex items-center mb-10 cursor-pointer' onClick={() => setCategoryID(item.id)}>
        //                             <span className='text-[#9F9F9F] w-full'>{item?.categoryName}</span>
        //                             <span className={`w-4/12 text-right ${categoryID === item.id ? 'block' : 'hidden'}`}>&#10003;</span>
        //                             <span className='text-[#9F9F9F] w-4/12 flex justify-end'>{item?.blogCount}</span>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //             <div className=' mx-auto mb-10 mt-24 lg:px-[20%]'>
        //                 <h1 className='text-black font-medium text-2xl mb-8'>Recent Posts</h1>
        //                 <div className='flex flex-col gap-10'>
        //                     {recentBlogs?.map(item => (
        //                         <div key={item?.id} className='flex gap-3 items-center'>
        //                             <img src={item?.imageUrls[0]} alt="recent-post-card-image" className='min-w-[80px] h-20 object-cover rounded-lg' />
        //                             <div className='flex flex-col'>
        //                                 <span className='text-black font-medium leading-5'>{item?.header}</span>
        //                                 <span className='text-[#9F9F9F] text-xs mt-1'>{item?.createdDate}</span>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <Pagination page={perPage} total={totalCount} />
        // </section>

        <section className="container mx-auto pt-[50px] lg:pt-[100px] lg:px-9">
            <div className="container mx-auto pt-[50px] lg:pt-[50px] lg:px-9">
                <div className="block lg:hidden">
                    <div className="flex items-center rounded-[10px] border px-2 mx-2 py-2 border-[#9F9F9F] mb-11">
                        <input
                            type="text"
                            className="px-4 py-2 w-full outline-none"
                            placeholder="Search..."
                            value={searchText} name='searchText' onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="px-4">
                            <img src={search} alt="Search Icon" />
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                        {blogs?.map((item) => (
                            <div key={item.id} className="px-4 lg:px:0">
                                <img
                                    src={item.imageUrls[0]}
                                    alt="Blog Post"
                                    className="w-full h-auto "
                                />
                                <div className="flex items-center justify-between text-[#9F9F9F] py-2">
                                    <div className="flex items-center space-x-2 pt-3 pb-6">
                                        <img src={admin} alt="Admin Icon" />
                                        <span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
                                            {item.adminInfo.roleName}
                                        </span>
                                        <img src={date} alt="Calendar Icon" />
                                        <span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
                                            {moment(item?.createdDate).format('DD MMM YYYY')}
                                        </span>
                                        <img src={wood} alt="Tag Icon" />
                                        <span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
                                            {item.category.categoryName}
                                        </span>
                                    </div>
                                </div>
                                <div className="lg:pb-8">
                                    <h2 className="text-3xl font-Poppins font-medium pb-3">
                                        {item.header}
                                    </h2>
                                    <p className="font-Poppins text-[#9F9F9F] font-light text-base pb-4">
                                        {item.text}
                                    </p>
                                    <button className="border-b border-black hover:text-[#B88E2F] outline-none text-base font-Poppins font-normal py-3 mb-[54px]">
                                        Read more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-1 self-start px-4 lg:pl-8 sticky-sidebar overflow-y-auto">
                        <div className="hidden lg:flex items-center rounded-[10px] border px-4 py-2 border-[#9F9F9F] overflow-hidden mb-11">
                            <input
                                type="text"
                                className="px-4 py-2 w-full outline-none"
                                placeholder="Search..."
                            />
                            <button className=" px-4">
                                <img src={search} alt="Search Icon" />
                            </button>
                        </div>
                        <div className="mx-[34px] mb-28">
                            <h3 className="text-2xl font-medium font-Poppins mb-8">
                                Categories
                            </h3>
                            <ul className="space-y-8 overflow-y-scroll h-80">
                                {categories?.map((item) => (
                                    <li key={item.id} onClick={() => setCategoryID(item.id)} className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
                                        <span className='text-[#9F9F9F] w-full cursor-pointer'>{item?.categoryName}</span>
                                        <span className={`w-4/12 text-right ${categoryID === item.id ? 'block' : 'hidden'}`}>&#10003;</span>
                                        <span className='text-[#9F9F9F] w-4/12 flex justify-end'>{item?.blogCount}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mx-[34px] mb-28 ">
                            <h3 className="text-2xl font-medium font-Poppins mb-8">
                                Recent Posts
                            </h3>
                            {recentBlogs?.map((item) => (
                                <div className="flex items-center bg-white rounded-lg shadow-xs mb-10" key={item.id}>
                                    <div
                                        className="flex-none rounded-lg overflow-hidden w-16 h-16"
                                        style={{ minWidth: "64px" }}
                                    >
                                        <img
                                            src={item.imageUrls[0]}
                                            alt="Notebook"
                                            className="object-cover w-[80px] h-[80px]"
                                        />
                                    </div>
                                    <div className="flex-grow ml-4 pr-8">
                                        <p className="text-sm font-Poppins font-normal pb-2 ">
                                            {item.header}
                                        </p>
                                        <p className="text-xs font-normal text-[#9F9F9F]">
                                            {item.createdDate}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Pagination page={perPage} total={totalCount} />
            </div>
        </section>
    )
}

export default BlogSection;