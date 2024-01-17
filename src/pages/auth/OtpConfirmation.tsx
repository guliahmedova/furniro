import React, { useState, Fragment, useRef, useEffect, FC } from "react";
let currentOTPIndex: number;

interface OtpConfirmationProps {
  setStepIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
};

const OtpConfirmation:FC<OtpConfirmationProps> = ({setStepIndex}) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="h-screen flex justify-center items-center space-x-2 bg-[#B88E2F]/80">
      <div className="lg:w-6/12 w-full xl:mx-0 mx-4 h-2/5 flex justify-center gap-4 items-center border-2 bg-white rounded shadow">
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
    </div>
  )
}

export default OtpConfirmation