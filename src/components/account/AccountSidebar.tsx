import { NavLink, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { useSelector } from "react-redux";
import { deleteAccount } from "../../redux/features/authSlice";

const AccountSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const removeToken = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem('userId');
        navigate('/login');
    };

    const username = useSelector((state: RootState) => state.auth.userName);

    const deleteAccountClickHandler  = () => {
        if (username.length > 0 ) {
            dispatch(deleteAccount(username));
        }
    };

    return (
        <div className="w-fit xl:p-10 xl:bg-gray-100">
            <div className="flex xl:flex-col gap-3 flex-row">
                <NavLink to="/profile/edit" className={({ isActive }) => isActive ? "text-[#B88E2F] xl:border-l-2 xl:pl-3 border-[#B88E2F] text-lg font-bold" : "text-lg pl-3 font-medium"} >Edit</NavLink>
                <NavLink to="/profile/change-password" className={({ isActive }) => isActive ? "text-[#B88E2F] xl:border-l-2 xl:pl-3 border-[#B88E2F] text-lg font-bold" : "text-lg pl-3 font-medium"}>Password</NavLink>
                <span className="text-lg pl-3 font-medium cursor-pointer m-0 p-0" onClick={removeToken}>Logout</span>
                <span className="text-xl pl-3 font-medium cursor-pointer truncate m-0 p-0 capitalize text-red-600" onClick={deleteAccountClickHandler}>Delete My account</span>
            </div>
        </div>
    )
}

export default AccountSidebar;