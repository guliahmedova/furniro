import { FC } from "react";

interface SendOtpEmailProps {
  setStepIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
};

const SentOtpEmail: FC<SendOtpEmailProps> = ({ setStepIndex }) => {

  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center py-10 bg-[#B88E2F]/80">
      <form className="lg:w-5/12 border bg-slate-50 p-5 rounded-lg" >
        <div className="w-full">
          <label htmlFor="email" className="block capitalize font-medium text-lg my-2 select-none">email</label>
          <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" name='email' type="email" id="email" required />
        </div>
        <button className="block bg-[#B88E2F] text-white font-medium text-lg xl:w-[20%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600" type='submit'>Send Code</button>
      </form>
    </div>
  )
}

export default SentOtpEmail