import { RootState, useAppDispatch } from "../../redux/app/store";
import { useSelector } from "react-redux";
import { onNavigateNext, onNavigatePrev, onClickCurrentPage } from "../../redux/features/paginationSlice";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const currentpage = useSelector((state: RootState) => state.pagination.currentPage);

    const totalPages = 48;
    const perPage = 8;

    const dotsCount = Math.ceil(totalPages / perPage);
    let dots = [];

    for (let index = 0; index < dotsCount; index++) {
        dots.push(<li key={index} onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(onClickCurrentPage(index + 1))
        }}>
            <span
                className={`flex items-center justify-center h-14 xl:w-14 leading-tight rounded-md ${currentpage === index + 1 ? 'bg-[#B88E2F] text-white cursor-default' : 'bg-[#F9F1E7] text-black cursor-pointer'}`}>
                {index + 1}
            </span>
        </li>)
    };

    return (
        <div className="flex justify-center mt-[70px]">
            <nav aria-label="Page navigation example mx-auto block">
                <ul className={`flex items-center xl:gap-9 gap-1 text-base h-14`}>
                    {currentpage !== 1 && (
                        <li onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(onNavigatePrev());
                        }}>
                            <span className="flex items-center justify-center px-4 h-14 leading-tight text-black rounded-md bg-[#F9F1E7] cursor-pointer">Previous</span>
                        </li>
                    )}
                    {dots}
                    {currentpage !== dotsCount && (
                        <li onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(onNavigateNext());
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