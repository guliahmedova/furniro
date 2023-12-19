const ForgotPassword = () => {
  return (
    <div className="w-[85%] mx-auto py-10">
      <section className="w-full">
        <h1 className="font-bold text-2xl text-center text-gray-600 xl:block hidden select-none">Password</h1>
        <div className="xl:mt-8 bg-slate-50 p-5 rounded-lg w-full">
          <form className="w-full border p-5">
            <div className="w-full">
              <label htmlFor="email" className="block capitalize font-medium text-lg my-2 select-none">email</label>
              <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="email" id="email" />
            </div>
            <div className="flex gap-3 xl:flex-row flex-col">
              <div className="xl:w-6/12 w-full">
                <label htmlFor="newpassword" className="block capitalize font-medium text-lg my-2 select-none">new password</label>
                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="password" id="newpassword" />
              </div>
              <div className="xl:w-6/12 w-full">
                <label htmlFor="repeatpassword" className="block capitalize font-medium text-lg my-2 select-none">Repeat password</label>
                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="password" id="repeatpassword" />
              </div>
            </div>
            <button className="block bg-[#B88E2F] text-white font-medium text-lg xl:w-[20%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600">Change Password</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ForgotPassword;