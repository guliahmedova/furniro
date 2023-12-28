import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { updateUser } from "../../redux/features/authSlice";
import { RegisterYup } from "./RegisterYup";

const ProfileEdit = () => {
    const dispatch = useAppDispatch();
    const { userName, lastName, firstName, email } = useSelector((state: RootState) => state.auth);

    // redux gelecek bu deyer
    const userId = localStorage.getItem('userId');

    const { handleChange, values, handleSubmit, errors } = useFormik({
        initialValues: {
            id: userId && parseInt(userId),
            email: email && email,
            userName: userName && userName,
            firstName: firstName && firstName,
            lastName: lastName && lastName,
        },
        validationSchema: RegisterYup,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    useEffect(() => {
        // dispatch(getUserById(values.id));
    }, [dispatch, values]);

    const handleBtnClick = () => {
        dispatch(updateUser({
            // id: values.id,
            userName: values.userName,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
        }))
    };

    return (
        <div className="w-[85%] mx-auto py-10">
            <section className="w-full">
                <h1 className="font-bold text-2xl text-center text-gray-600 xl:block hidden select-none">Profile</h1>
                <div className="xl:mt-8 bg-slate-50 p-5 rounded-lg w-full">
                    <form className="w-full border p-5" onSubmit={handleSubmit}>
                        <div className="w-full flex lg:flex-row flex-col gap-3">
                            <div className="w-full">
                                <label htmlFor="userName" className="block capitalize font-medium text-lg my-2 select-none">Username</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.userName} name="userName" onChange={handleChange} type="text" id="userName" />
                                {errors.userName ? <div className='text-red-600 font-semibold text-sm'>{errors.userName}</div> : null}
                            </div>

                            <div className="w-full">
                                <label htmlFor="firstname" className="block capitalize font-medium text-lg my-2 select-none">firstname</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.firstName} name="firstName" onChange={handleChange} type="text" id="firstname" />
                                {errors.firstName ? <div className='text-red-600 font-semibold text-sm'>{errors.firstName}</div> : null}
                            </div>
                        </div>

                        <div className="flex gap-3 md:flex-row flex-col">
                            <div className="w-full">
                                <label htmlFor="email" className="block capitalize font-medium text-lg my-2 select-none">email</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.email} name="email" onChange={handleChange} type="email" id="email" />
                                {errors.email ? <div className='text-red-600 font-semibold text-sm'>{errors.email}</div> : null}
                            </div>

                            <div className="w-full">
                                <label htmlFor="lastname" className="block capitalize font-medium text-lg my-2 select-none">lastname</label>
                                <input className="p-4 rounded-md focus:outline w-full focus:outline-gray-500" value={values.lastName} name="lastName" onChange={handleChange} type="text" id="lastname" />
                                {errors.lastName ? <div className='text-red-600 font-semibold text-sm'>{errors.lastName}</div> : null}
                            </div>
                        </div>

                        <button type="submit" onClick={handleBtnClick} className="block bg-[#B88E2F] text-white font-medium text-lg md:w-[30%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600">Save Changes</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ProfileEdit