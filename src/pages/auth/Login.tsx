import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/store";
import { userLogin } from "../../redux/features/authSlice";
import { validate } from '../auth/LoginValidate';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values,) => {
      dispatch(userLogin({
        userName: values.userName,
        password: values.password,
      }),
      ).then((confirm) => {
        navigate('/');
        if (confirm) {
          resetForm();
        }
      })
    }
  });

  return (
    <section className="bg-primary-hero-image w-full h-screen bg-cover bg-fixed bg-center bg-no-repeat md:bg-top">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#e3e3e3]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userName" className="block mb-2 text-sm font-medium text-black capitalize">user Name</label>
                <input type="text" name="userName" value={values.userName} onChange={handleChange} id="userName" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-100  dark:border-gray-600 dark:placeholder-gray-400" />
                {errors.password ? <div className='text-red-600 font-semibold text-sm'>{errors.userName}</div> : null}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} id="password" placeholder="••••••••" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" />
                {errors.password ? <div className='text-red-600 font-semibold text-sm'>{errors.password}</div> : null}
              </div>
              <div className="flex items-center justify-between">
                <Link to="/profile/change-password" className="text-sm font-medium text-black hover:underline">Forgot password?</Link>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-yellow-700 border dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className="text-sm text-black font-medium">
                Don’t have an account yet? <Link to="/register" className="font-bold text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login