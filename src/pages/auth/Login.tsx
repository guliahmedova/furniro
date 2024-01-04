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
            position: "top-end",
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
      <div className="h-full xl:w-[40%] flex flex-col justify-center items-center mx-auto px-4">
        <h1 className='xl:text-xl md:text-lg text-sm font-bold mb-2 capitalize'>Login to your Account </h1>
        <span className='text-sm font-bold text-red-500 bg-[#e3e3e3]'>{error && error} </span>
        <form className="flex flex-col xl:gap-5 w-full xl:mt-0 mt-5 p-6 bg-[#e3e3e3] border border-gray-400 rounded-lg" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-black capitalize">user Name</label>
            <input type="text" name="userName" value={values.userName} onChange={handleChange} id="userName" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-100  dark:border-gray-600 dark:placeholder-gray-400" />
            {errors.password ? <div className='text-red-600 font-semibold text-sm'>{errors.userName}</div> : null}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
            <div className='relative'>
              <input type={showPassword ? 'text' : 'password'} name="password" value={values.password} onChange={handleChange} id="password" placeholder="••••••••" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" />
              <img src={showPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-2.5' onClick={() => setshowPassword(!showPassword)} alt="" />
            </div>
            {errors.password ? <div className='text-red-600 font-semibold text-sm'>{errors.password}</div> : null}
          </div>
          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm font-medium text-black hover:underline">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-yellow-700 border dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
          <p className="text-sm text-black font-medium text-right">
            Don’t have an account yet? <Link to="/register" className="font-bold text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login