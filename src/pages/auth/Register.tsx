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
      <div className='h-full xl:w-[60%] flex flex-col justify-center items-center mx-auto px-4'>
        <h1 className='xl:text-xl md:text-lg text-sm font-bold mb-2 capitalize'>Create an Account </h1>
        <span className='text-sm font-bold text-red-500 bg-[#e3e3e3] border border-gray-400'>{error && error} </span>
        <form className="flex xl:justify-between xl:flex-row flex-col xl:gap-10 w-full xl:mt-0 mt-5 p-6 bg-[#e3e3e3] border border-gray-400 rounded-lg" onSubmit={handleSubmit}>
          <div className="xl:w-6/12 w-full flex flex-col gap-3">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-black capitalize mb-2">User name</label>
              <input type="text" name="userName" value={values.userName} onChange={handleChange} id="userName" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Joe123" />
              {errors.userName ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.userName}</div> : ""}
            </div>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-black capitalize mb-2">first name</label>
              <input type="text" name="firstName" value={values.firstName} onChange={handleChange} id="firstName" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Joe" />
              {errors.firstName ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.firstName}</div> : null}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-black capitalize mb-2">last name</label>
              <input type="text" name="lastName" value={values.lastName} onChange={handleChange} id="lastName" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Smith" />
              {errors.lastName ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.lastName}</div> : null}
            </div>
          </div>
          <div className="xl:w-6/12 flex flex-col gap-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black capitalize mb-2">email</label>
              <input type="email" name="email" value={values.email} onChange={handleChange} id="email" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Joe@gmail.com" />
              {errors.email ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.email}</div> : null}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black capitalize mb-2">Password</label>
              <div className='relative'>
                <input type={showPassword ? 'text' : 'password'} name="password" value={values.password} onChange={handleChange} id="password" placeholder="••••••••" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" />
                <img src={showPassword ? openEye : closeEye} className='absolute w-6 h-6 cursor-pointer right-2.5 top-2.5' onClick={() => setshowPassword(!showPassword)} alt="" />
                {errors.password ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.password}</div> : null}
              </div>
            </div>
            <button type="submit" className="w-full mt-6 text-white bg-yellow-700 border hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            <p className="text-sm font-medium text-black text-right">
              Already have an account? <Link to="/login" className="font-bold text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register;