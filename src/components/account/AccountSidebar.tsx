import { NavLink, useNavigate } from "react-router-dom";

const AccountSidebar = () => {
    const navigate = useNavigate();

    const removeToken = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem('userId');
        navigate('/login');
    };

    return (
        <div className="w-fit xl:p-10 xl:bg-gray-100">
            <div className="flex xl:flex-col gap-3 flex-row">
                <NavLink to="/profile/edit" className={({ isActive }) => isActive ? "text-[#B88E2F] xl:border-l-2 xl:pl-3 border-[#B88E2F] text-lg font-bold" : "text-lg pl-3 font-medium"} >Edit</NavLink>
                <NavLink to="/profile/change-password" className={({ isActive }) => isActive ? "text-[#B88E2F] xl:border-l-2 xl:pl-3 border-[#B88E2F] text-lg font-bold" : "text-lg pl-3 font-medium"}>Password</NavLink>
                <span className="text-lg pl-3 font-medium cursor-pointer m-0 p-0" onClick={removeToken}>Logout</span>
            </div>
        </div>
    )
}

export default AccountSidebar;