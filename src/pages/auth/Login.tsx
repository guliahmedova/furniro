import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/store";
import { userLogin } from "../../redux/features/authSlice";
import { LoginYup } from './LoginYup';
import { useState } from 'react';
import closeEye from '../../assets/images/close-eye.svg';
import openEye from '../../assets/images/open-eye.svg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState('');

  const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: LoginYup,
    onSubmit: (values) => {
      dispatch(userLogin({
        userName: values.userName,
        password: values.password
      })).then((confirm) => {
        if (confirm.meta.requestStatus === 'rejected') {
          setError('The username or password is incorrect.');
        }
        else if (confirm.meta.requestStatus === 'fulfilled') {
          navigate('/');
          setError('');
          resetForm();
          MySwal.fire({
            position: "center",
            icon: "success",
            title: "You have successfully logged in",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
  });

  


  return (
    <section className="bg-primary-hero-image w-full h-screen bg-cover bg-fixed bg-center bg-no-repeat md:bg-top">
      <div className='bg-[#3A3A3A]/75 w-full h-full'>
        <div className="h-[95%] lg:w-[40%] md:w-8/12 sm:w-10/12 flex flex-col justify-center items-center mx-auto px-4">
          <form className="flex flex-col gap-5 w-full xl:mt-0 mt-5 p-6 bg-slate-50 rounded-lg" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName" className="block mb-2 sm:text-lg font-medium text-black capitalize">user Name</label>
              <input type="text" name="userName" value={values.userName} onChange={handleChange} id="userName" className="p-4 rounded-md focus:outline w-full focus:outline-gray-500 border" />
              {errors.userName ? <div className='text-red-600 font-medium text-sm mr-1'>{errors.userName}</div> : null}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 sm:text-lg font-medium text-black">Password</label>
              <div className='relative'>
                <input type={showPassword ? 'text' : 'password'} name="password" value={values.password} onChange={handleChange} id="password" placeholder="••••••••" className="p-4 rounded-md focus:outline w-full focus:outline-gray-500 border" />
                <img src={showPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-5' onClick={() => setshowPassword(!showPassword)} alt="" />
              </div>
              {errors.password ? <div className='text-red-600 font-medium text-sm ml-1'>{errors.password}</div> : null}
            </div>
            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm font-medium text-black hover:underline">Forgot password?</Link>
            </div>
            <Link to="/" className='text-right hover:underline' >Back To </Link>
            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg sm:text-lg text-center bg-yellow-700 border dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-sm"><span className='block px-5 py-2.5 w-full h-full hover:translate-x-1 duration-200 ease-in-out'>Sign in</span></button>
            <span className='text-sm font-medium text-red-500 ml-1.5'>{error && error} </span>
            <p className="text-sm text-black text-right">
              Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline ease-in-out duration-200 dark:text-primary-500 text-sm">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login