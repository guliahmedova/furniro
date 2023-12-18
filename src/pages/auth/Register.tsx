import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/store";
import { userRegister } from "../../redux/features/authSlice";
import { validate } from '../auth/RegisterValidate';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    validate,
    onSubmit: (values,) => {
      dispatch(userRegister({
        userName: values.userName,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        roleId: 2,
        isActive: true
      }),
      ).then((confirm) => {
        navigate('/login');
        if (confirm) {
          resetForm();
        }
      })
    }
  });

  return (
    <section className="bg-primary-hero-image w-full h-screen bg-cover bg-fixed bg-center bg-no-repeat md:bg-top">
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen">
        <div className="w-[50%] rounded-lg shadow-2xl dark:border bg-[#e3e3e3] dark:border-gray-700">
          <div className="md:space-y-6 sm:p-8 h-fit w-full">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl text-center">Create and account</h1>
            <form className="flex justify-between gap-10 w-full" onSubmit={handleSubmit}>
              <div className="w-6/12 flex flex-col gap-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="userName" className="block text-sm font-medium text-black capitalize">User name</label>
                    {errors.userName ? <div className='text-red-600 block font-semibold text-sm'>{errors.userName}</div> : ""}
                  </div>
                  <input type="text" name="userName" value={values.userName} onChange={handleChange} id="userName" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Joe123" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-black capitalize">first name</label>
                    {errors.firstName ? <div className='text-red-600 font-semibold text-sm'>{errors.firstName}</div> : null}
                  </div>
                  <input type="text" name="firstName" value={values.firstName} onChange={handleChange} id="firstName" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Joe" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-black capitalize">last name</label>
                    {errors.lastName ? <div className='text-red-600 font-semibold text-sm'>{errors.lastName}</div> : null}
                  </div>
                  <input type="text" name="lastName" value={values.lastName} onChange={handleChange} id="lastName" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Smith" />
                </div>
              </div>
              <div className="w-6/12 flex flex-col gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="email" className="block text-sm font-medium text-black capitalize">email</label>
                    {errors.email ? <div className='text-red-600 font-semibold text-sm'>{errors.email}</div> : null}
                  </div>
                  <input type="email" name="email" value={values.email} onChange={handleChange} id="email" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Joe@gmail.com" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                    {errors.password ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.password}</div> : null}
                  </div>
                  <input type="password" name="password" value={values.password} onChange={handleChange} id="password" placeholder="••••••••" className="bg-slate-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" />
                </div>
                <button type="submit" className="w-full mt-6 text-white bg-yellow-700 border hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p className="text-sm font-medium text-black text-right">
                  Already have an account? <Link to="/login" className="font-bold text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;