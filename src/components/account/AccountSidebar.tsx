import { NavLink, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { useSelector } from "react-redux";
import { deleteAccount } from "../../redux/features/authSlice";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const AccountSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const removeToken = () => {
        MySwal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#008000",
            cancelButtonColor: "#a3142c",
            confirmButtonText: "Yes, logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("userToken");
                localStorage.removeItem('userId');
                navigate('/login');
            }
        });
    };

    const username = useSelector((state: RootState) => state.auth.userName);

    const deleteAccountClickHandler = () => {
        if (username.length > 0) {
            MySwal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert your account!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#008000",
                cancelButtonColor: "#780115",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteAccount(username));
                    localStorage.removeItem("userToken");
                    localStorage.removeItem('userId');
                    navigate('/register');
                }
            });
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