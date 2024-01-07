import { useFormik } from 'formik';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { changePassword } from '../../redux/features/authSlice';
import { ChangePasswordYup } from './ChangePasswordYup';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
const MySwal = withReactContent(Swal);
import closeEye from '../../assets/images/close-eye.svg';
import openEye from '../../assets/images/open-eye.svg';

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('userId');
  const [errorMsg, setErrorMsg] = useState('');
  const error = useSelector((state: RootState) => state.auth.changepErr);
  const isSuccess = useSelector((state: RootState) => state.auth.isSuccess);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    repeatNewPassword: false,
  });

  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const userID_Int = useMemo(() => {
    if (userId) {
      return parseInt(userId);
    };
  }, [userId]);

  const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: "",
      repeatNewPassword: "",
    },
    validationSchema: ChangePasswordYup,
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

  const changePasswordClick = useCallback(() => {
    if (userID_Int && values.currentPassword && values.repeatNewPassword && values.newPassword) {
      dispatch(changePassword({
        id: userID_Int,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        repeatNewPassword: values.repeatNewPassword
      })).then((confirm) => {
        if (confirm?.payload?.isSuccess) {
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
  }, [userID_Int, values, errorMsg, isSuccess]);

  return (
    <div className="w-[85%] mx-auto py-10">
      <section className="w-full">
        <h1 className="font-bold text-2xl text-center text-gray-600 xl:block hidden select-none">Password</h1>
        <div className="xl:mt-8 bg-slate-50 p-5 rounded-lg w-full">
          <span className='text-sm font-bold text-red-500'>{!isSuccess && (errorMsg && errorMsg)} </span>
          <form className="w-full border p-5" onSubmit={handleSubmit}>
            <div className="w-full">
              <label htmlFor="currentPassword" className="block capitalize font-medium text-lg my-2 select-none">current Password</label>
              <div className='relative'>
                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.currentPassword} name='currentPassword' type="text" id="currentPassword" onChange={handleChange} />
                <img src={showPassword.currentPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-4' onClick={() => togglePasswordVisibility('currentPassword')} alt="" />
              </div>
              {errors.currentPassword ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.currentPassword}</div> : ""}

            </div>
            <div className="flex gap-3 xl:flex-row flex-col">
              <div className="xl:w-6/12 w-full">
                <label htmlFor="newPassword" className="block capitalize font-medium text-lg my-2 select-none">new password</label>
                <div className='relative'>
                  <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.newPassword} name='newPassword' type="text" id="newPassword" onChange={handleChange} />
                  <img src={showPassword.newPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-4' onClick={() => togglePasswordVisibility('newPassword')} alt="" />
                </div>
                {errors.newPassword ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.newPassword}</div> : ""}
              </div>
              <div className="xl:w-6/12 w-full">
                <label htmlFor="repeatNewPassword" className="block capitalize font-medium text-lg my-2 select-none">Repeat new password</label>
                <div className='relative'>
                  <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.repeatNewPassword} name='repeatNewPassword' type="text" id="repeatNewPassword" onChange={handleChange} />
                  <img src={showPassword.repeatNewPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-4' onClick={() => togglePasswordVisibility('repeatNewPassword')} alt="" />
                </div>
                {errors.repeatNewPassword ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.repeatNewPassword}</div> : ""}
              </div>
            </div>
            <button className="block bg-[#B88E2F] text-white font-medium text-lg xl:w-[20%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600" type='submit' onClick={changePasswordClick}>Change Password</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ChangePassword;