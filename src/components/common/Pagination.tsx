import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/app/store";
import { onClickCurrentPage } from "../../redux/features/paginationSlice";

interface PaginationProps {
    page: number,
    total: number
};

const Pagination: FC<PaginationProps> = ({ page, total }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(onClickCurrentPage(currentPage));
    }, [dispatch, currentPage, total, page]);

    const onNavigatePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(prevState => prevState - 1);
        }
    };

    const onNavigateNext = () => {
        setCurrentPage(prevState => prevState + 1);
    };

    const dotsCount = Math.ceil(total / page);
    
    let dots = [];
    for (let index = 0; index < dotsCount; index++) {
        dots.push(<li key={index} onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setCurrentPage(index + 1);
        }}>
            <span
                className={`flex items-center justify-center h-14 xl:w-14 w-auto xl:px-0 px-4 leading-tight text-xl rounded-md ${currentPage === index + 1 ? 'bg-[#B88E2F] text-white cursor-default' : 'bg-[#F9F1E7] text-black cursor-pointer'}`}>
                {index + 1}
            </span>
        </li>)
    };

    useEffect(()=>{
        if (currentPage && dotsCount && (currentPage > dotsCount)) {
            setCurrentPage(1);
        }
    }, [dotsCount]);
    
    return (
        <div className={`justify-center mt-[70px] mb-6 ${dotsCount > 1 ? 'flex' : 'hidden'}`}>
            <nav aria-label="Page navigation example mx-auto block">
                <ul className={`flex items-center xl:gap-9 gap-1 text-base h-14`}>
                    {currentPage !== 1 && (
                        <li onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onNavigatePrev();
                        }}>
                            <span className="flex items-center justify-center px-4 h-14 leading-tight text-black rounded-md bg-[#F9F1E7] cursor-pointer">Previous</span>
                        </li>
                    )}
                    {dots}
                    {currentPage !== dotsCount && (
                        <li onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onNavigateNext();
                        }}>
                            <span className="flex items-center justify-center px-4 h-14 leading-tight text-black rounded-md bg-[#F9F1E7] cursor-pointer">Next</span>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination; 