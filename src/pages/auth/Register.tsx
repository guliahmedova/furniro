import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import closeEye from '../../assets/images/close-eye.svg';
import openEye from '../../assets/images/open-eye.svg';
import { useAppDispatch } from "../../redux/app/store";
import { userRegister } from "../../redux/features/authSlice";
import { RegisterYup } from './RegisterYup';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState('');

  const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: 2,
      isActive: true
    },
    validationSchema: RegisterYup,
    onSubmit: (values) => {
      dispatch(userRegister({
        userName: values.userName || '',
        firstName: values.firstName || '',
        lastName: values.lastName || '',
        email: values.email || '',
        password: values.password || '',
        roleId: 2,
        isActive: true
      })).then((confirm) => {
        if (confirm.meta.requestStatus === 'rejected') {
          setError(confirm.payload);
        }
        else if (confirm.meta.requestStatus === 'fulfilled') {
          navigate('/login');
          resetForm();
          setError('');
        }
      })
    }
  });

  return (
    <section className="bg-primary-hero-image w-full h-screen bg-cover bg-fixed bg-center bg-no-repeat md:bg-top">
      <div className='bg-[#3A3A3A]/75 w-full h-full'>
        <div className='h-full lg:w-[60%] md:w-8/12 sm:w-10/12 flex flex-col justify-center items-center mx-auto px-4'>
          <span className='text-sm font-bold text-red-500 bg-[#e3e3e3]'>{error && error} </span>
          <form className="flex xl:justify-between xl:flex-row flex-col sm:gap-10 min-h-[60%] w-full xl:mt-0 mt-5 p-6 bg-slate-50 rounded-lg" onSubmit={handleSubmit}>
            <div className="xl:w-6/12 flex flex-col gap-3">
              <div>
                <label htmlFor="userName" className="block mb-2 sm:text-lg font-medium text-black capitalize">User name</label>
                <input type="text" name="userName" value={values.userName} onChange={handleChange} id="userName" className="p-4 rounded-md focus:outline w-full focus:outline-gray-500 border" placeholder="Joe123" />
                {errors.userName ? <div className='text-red-600 font-medium text-sm text-right'>{errors.userName}</div> : ""}
              </div>
              <div>
                <label htmlFor="firstName" className="block mb-2 sm:text-lg font-medium text-black capitalize">first name</label>
                <input type="text" name="firstName" value={values.firstName} onChange={handleChange} id="firstName" className="p-4 rounded-md focus:outline w-full focus:outline-gray-500 border" placeholder="Joe" />
                {errors.firstName ? <div className='text-red-600 font-medium text-sm text-right'>{errors.firstName}</div> : null}
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 sm:text-lg font-medium text-black capitalize">last name</label>
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} id="lastName" className="p-4 rounded-md focus:outline w-full focus:outline-gray-500 border" placeholder="Smith" />
                {errors.lastName ? <div className='text-red-600 font-medium text-sm text-right'>{errors.lastName}</div> : null}
              </div>
            </div>
            <div className="xl:w-6/12 flex flex-col gap-3">
              <div>
                <label htmlFor="email" className="block mb-2 sm:text-lg font-medium text-black capitalize">email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} id="email" className="p-4 rounded-md focus:outline w-full focus:outline-gray-500 border" placeholder="Joe@gmail.com" />
                {errors.email ? <div className='text-red-600 font-medium text-sm text-right'>{errors.email}</div> : null}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 sm:text-lg font-medium text-black capitalize">Password</label>
                <div className='relative'>
                  <input type={showPassword ? 'text' : 'password'} name="password" value={values.password} onChange={handleChange} id="password" placeholder="••••••••" className="p-4 rounded-md focus:outline w-full focus:outline-gray-500 border" />
                  <img src={showPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-5' onClick={() => setshowPassword(!showPassword)} alt="" />
                  {errors.password ? <div className='text-red-600 font-medium text-sm text-right'>{errors.password}</div> : null}
                </div>
              </div>
              <div className='w-full h-full flex flex-col place-content-end'>
                <Link to="/" className='text-right hover:underline mb-6 mr-1' >Back To </Link>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg sm:text-lg text-center bg-yellow-700 border dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-sm mb-3"><span className='block px-5 py-2.5 w-full h-full hover:translate-x-1 duration-200 ease-in-out'>Sign up</span></button>
                <p className="text-sm text-black text-right">
                  Already have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline ease-in-out duration-200 dark:text-primary-500 text-sm">Login here</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register;