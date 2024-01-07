import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { resetPassword } from '../../redux/features/forgotPasswordSlice';
import { ForgotPasswordYup } from './ForgotPasswordYup';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const MySwal = withReactContent(Swal);
import closeEye from '../../assets/images/close-eye.svg';
import openEye from '../../assets/images/open-eye.svg';

const ForgotPassword = () => {
    const dispatch = useAppDispatch();
    const [errorMsg, setErrorMsg] = useState('');
    const { error, isSuccess } = useSelector((state: RootState) => state.forgotPassword);
    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        repeatNewPassword: false,
    });

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

    useEffect(() => {
        if (error?.length > 0 && !isSuccess) {
            setErrorMsg(error);
        } else {
            setErrorMsg('');
            resetForm();
        }
    }, [error, errorMsg, isSuccess]);

    const resetPasswordClickHandler = () => {
        if (values.email.length > 0 && values.newPassword.length > 0 && values.repeatNewPassword.length > 0) {
            dispatch(resetPassword({
                email: values.email,
                newPassword: values.newPassword,
                repeatNewPassword: values.repeatNewPassword
            })).then((confirm) => {
                if (confirm?.payload?.length === 0) {
                    MySwal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your password has been updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        }
    };

    return (
        <div className="w-[85%] mx-auto py-10">
            <section className="w-full">
                <h1 className="font-bold text-2xl text-center text-gray-600 xl:block hidden select-none">Forgot Password</h1>
                <div className="xl:mt-8 bg-slate-50 p-5 rounded-lg w-full">
                    <span className='text-sm font-bold text-red-500'>{!isSuccess && (errorMsg && errorMsg)} </span>
                    <form className="w-full border p-5" onSubmit={handleSubmit}>
                        <div className="w-full">
                            <label htmlFor="email" className="block capitalize font-medium text-lg my-2 select-none">email</label>
                            <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.email} name='email' type="email" id="email" onChange={handleChange} />
                            {errors.email ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.email}</div> : ""}
                        </div>
                        <div className="flex gap-3 xl:flex-row flex-col">
                            <div className="xl:w-6/12 w-full">
                                <label htmlFor="newPassword" className="block capitalize font-medium text-lg my-2 select-none">new password</label>
                                <div className='relative'>
                                    <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.newPassword} name='newPassword' type={showPassword ? 'text' : 'password'} id="newPassword" onChange={handleChange} />
                                    <img  src={showPassword.newPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-4'  onClick={() => togglePasswordVisibility('newPassword')} alt="" />
                                </div>
                                {errors.newPassword ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.newPassword}</div> : ""}
                            </div>
                            <div className="xl:w-6/12 w-full">
                                <label htmlFor="repeatNewPassword" className="block capitalize font-medium text-lg my-2 select-none">Repeat new password</label>
                                <div className='relative'>
                                    <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.repeatNewPassword} name='repeatNewPassword' type={showPassword ? 'text' : 'password'} id="repeatNewPassword" onChange={handleChange} />
                                    <img  src={showPassword.repeatNewPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-4' onClick={() => togglePasswordVisibility('repeatNewPassword')} alt="" />
                                </div>
                                {errors.repeatNewPassword ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.repeatNewPassword}</div> : ""}
                            </div>
                        </div>
                        <button className="block bg-[#B88E2F] text-white font-medium text-lg xl:w-[20%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600" onClick={resetPasswordClickHandler} type='submit' >Reset Password</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword;