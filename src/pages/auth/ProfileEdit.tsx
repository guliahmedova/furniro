const ProfileEdit = () => {
    return (
        <div className="w-[85%] mx-auto py-10">
            <section className="w-full">
                <h1 className="font-bold text-2xl text-center text-gray-600 xl:block hidden">Profile</h1>
                <div className="xl:mt-8 bg-slate-50 p-5 rounded-lg w-full">
                    <form className="w-full border p-5">
                        <div className="w-full flex lg:flex-row flex-col gap-3">
                            <div className="xl:w-4/12 w-full">
                                <label htmlFor="userName" className="block capitalize font-medium text-lg my-2">Username</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="text" id="userName" />
                            </div>

                            <div className="xl:w-4/12 w-full">
                                <label htmlFor="firstname" className="block capitalize font-medium text-lg my-2">firstname</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="text" id="firstname" />
                            </div>

                            <div className="xl:w-4/12 w-full">
                                <label htmlFor="lastname" className="block capitalize font-medium text-lg my-2">lastname</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="text" id="lastname" />
                            </div>
                        </div>

                        <div className="flex gap-3 md:flex-row flex-col">
                            <div className="md:w-6/12 w-full">
                                <label htmlFor="email" className="block capitalize font-medium text-lg my-2">email</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="email" id="email" />
                            </div>

                            <div className="md:w-6/12 w-full">
                                <label htmlFor="password" className="block capitalize font-medium text-lg my-2">password</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" type="password" id="password" />
                            </div>
                        </div>

                        <button className="block bg-[#B88E2F] text-white font-medium text-lg md:w-[20%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600">Save</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ProfileEdit