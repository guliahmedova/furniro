import { FC, useState } from "react";
import { useAppDispatch } from "../../redux/app/store";
import { useFormik } from "formik";
import { SendOtpEmailYup } from "./SentOtpEmailYup";
import { sendOtpEmail } from "../../redux/features/forgotPasswordSlice";

interface SendOtpEmailProps {
  setStepIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
};

const SentOtpEmail: FC<SendOtpEmailProps> = ({ setStepIndex }) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');

  const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SendOtpEmailYup,
    onSubmit: () => { }
  });

  const handleBtnClick = () => {
    if (values.email.length > 0) {
      dispatch(sendOtpEmail(values.email)).then((confirm) => {
        if (confirm.meta.requestStatus === 'fulfilled' && setStepIndex) {
          setStepIndex(2);
          resetForm();
          setError('');
          localStorage.setItem("email", values.email);
        } else if (confirm.meta.requestStatus === 'rejected') {
          setError(confirm.payload)
        }
      })
    }
  };

  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center py-10 bg-[#B88E2F]/80">
      <form className="lg:w-5/12 border bg-slate-50 p-5 rounded-lg w-full mx-4 lg:mx-0" onSubmit={handleSubmit}>
        <span className='text-sm font-bold text-red-500 text-center w-full block'>{error.length > 0 && error} </span>
        <div className="w-full">
          <label htmlFor="email" className="block capitalize font-medium text-lg my-2 select-none">email</label>
          <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" name='email'
            value={values.email} onChange={handleChange} type="email" id="email" />
          {errors.email ? <div className='text-red-600 font-semibold text-sm text-right'>{errors.email}</div> : ""}
        </div>
        <button className="block bg-[#B88E2F] text-white font-medium text-lg xl:w-[20%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600" type='submit' onClick={handleBtnClick}>Send Code</button>
      </form>
    </div>
  )
}

export default SentOtpEmail