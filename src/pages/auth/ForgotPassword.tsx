import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import closeEye from '../../assets/images/close-eye.svg';
import openEye from '../../assets/images/open-eye.svg';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { resetPassword } from '../../redux/features/forgotPasswordSlice';
import { ForgotPasswordYup } from './ForgotPasswordYup';
const MySwal = withReactContent(Swal);

const ForgotPassword = () => {
    const dispatch = useAppDispatch();
    const [errorMsg, setErrorMsg] = useState('');
    const { isSuccess } = useSelector((state: RootState) => state.forgotPassword);
    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        repeatNewPassword: false,
    });
    const navigate = useNavigate();

    const togglePasswordVisibility = (field: keyof typeof showPassword) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
        initialValues: {
            email: '',
            newPassword: "",
            repeatNewPassword: "",
        },
        validationSchema: ForgotPasswordYup,
        onSubmit: () => { }
    });


    const resetPasswordClickHandler = () => {
        const userEmail = localStorage.getItem("email");
        if (userEmail && userEmail.length > 0 && values.newPassword.length > 0 && values.repeatNewPassword.length > 0) {
            dispatch(resetPassword({
                email: userEmail,
                newPassword: values.newPassword,
                repeatNewPassword: values.repeatNewPassword
            })).then((confirm) => {
                if (confirm?.meta.requestStatus === 'fulfilled') {
                    MySwal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your password has been updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setErrorMsg('');
                    resetForm();
                    localStorage.removeItem('email');
                    navigate('/login');
                } else if (confirm.meta.requestStatus === 'rejected') {
                    setErrorMsg(confirm.payload);
                }
            })
        }
    };

    return (
        <div className="w-full mx-auto py-10 h-screen flex justify-center items-center bg-[#B88E2F]/80">
            <div className="xl:mt-8 bg-slate-50 p-5 rounded-lg lg:w-6/12 w-full mx-4 lg:mx-0">
                <span className='text-sm font-bold text-red-500'>{!isSuccess && (errorMsg && errorMsg)} </span>
                <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label htmlFor="newPassword" className="block capitalize font-medium text-lg my-2 select-none">new password</label>
                        <div className='relative'>
                            <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.newPassword} name='newPassword' type={showPassword ? 'text' : 'password'} id="newPassword" onChange={handleChange} />
                            <img src={showPassword.newPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-4' onClick={() => togglePasswordVisibility('newPassword')} alt="" />
                        </div>
                        {errors.newPassword ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.newPassword}</div> : ""}
                    </div>
                    <div className="w-full">
                        <label htmlFor="repeatNewPassword" className="block capitalize font-medium text-lg my-2 select-none">Repeat new password</label>
                        <div className='relative'>
                            <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.repeatNewPassword} name='repeatNewPassword' type={showPassword ? 'text' : 'password'} id="repeatNewPassword" onChange={handleChange} />
                            <img src={showPassword.repeatNewPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-4' onClick={() => togglePasswordVisibility('repeatNewPassword')} alt="" />
                        </div>
                        {errors.repeatNewPassword ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.repeatNewPassword}</div> : ""}
                    </div>
                    <button className="block bg-[#B88E2F] text-white font-medium text-lg xl:w-[20%] w-full py-4 rounded-md mt-5 hover:bg-yellow-600" onClick={resetPasswordClickHandler} type='submit' >Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;