import React, { useState, Fragment, useRef, useEffect, FC } from "react";
import { useAppDispatch } from "../../redux/app/store";
import { otpConfirmation } from "../../redux/features/forgotPasswordSlice";
let currentOTPIndex: number;

interface OtpConfirmationProps {
  setStepIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
};

const OtpConfirmation: FC<OtpConfirmationProps> = ({ setStepIndex }) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else {
      setActiveOTPIndex(currentOTPIndex + 1);
    }
    setOtp(newOTP);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const handleKeyDownOn = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOTPIndex = index;
    if (key === 'Backspace') {
      setActiveOTPIndex(currentOTPIndex - 1);
    }
  };

  const handleBtnClick = () => {
    const userEmail = localStorage.getItem("email");
    if (userEmail && userEmail?.length > 0) {
      dispatch(otpConfirmation({
        email: userEmail,
        otpToken: otp.join('')
      })).then((confirm) => {
        if (confirm.meta.requestStatus === 'rejected') {
          setError(confirm.payload);
        } else if (confirm.meta.requestStatus === 'fulfilled' && setStepIndex) {
          setError('');
          setStepIndex(3);
        }
      })
    }
  };

  return (
    <div className="h-screen flex justify-center items-center space-x-2 bg-[#B88E2F]/80">
      <div className="lg:w-6/12 w-full xl:mx-0 mx-4 h-2/5 border-2 bg-white rounded shadow flex flex-col gap-6 items-center justify-center">
        <span className='text-sm font-bold text-red-500 text-center w-full block'>{error.length > 0 && error} </span>
        <div className="flex justify-center gap-4 items-center">
          {otp.map((_, index) => (
            <Fragment key={index}>
              <input
                ref={index === activeOTPIndex ? inputRef : null}
                type="number"
                onKeyDown={(e) => handleKeyDownOn(e, index)}
                value={otp[index]}
                onChange={handleChange}
                className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-medium text-xl border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition spin-button-none" />
            </Fragment>
          ))}
        </div>
        <button className="bg-[#B88E2F] text-white font-medium text-lg xl:w-[20%] w-auto px-3 py-4 rounded-md hover:bg-yellow-600" type='submit' onClick={handleBtnClick}>Vertify Code</button>
      </div>
    </div>
  )
}

export default OtpConfirmation