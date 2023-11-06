const Pagination = () => {
    return (
        <div className="flex justify-center mt-[70px]">
            <nav aria-label="Page navigation example mx-auto block">
                <ul className="flex items-center text-base h-10 gap-[38px]">
                    {/* <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li> */}
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-white rounded-md bg-[#B88E2F]">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black rounded-md bg-[#F9F1E7]">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 leading-tight text-black rounded-md bg-[#F9F1E7]">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black rounded-md bg-[#F9F1E7]">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination