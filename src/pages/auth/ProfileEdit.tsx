import { useFormik } from 'formik';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getUserById, updateUser } from "../../redux/features/authSlice";
import { RegisterYup } from "./RegisterYup";
import { useEffect } from 'react';

const ProfileEdit = () => {
    const dispatch = useAppDispatch();
    const username = useSelector((state: RootState) => state.auth.userName);
    const firstname = useSelector((state: RootState) => state.auth.firstName);
    const lastname = useSelector((state: RootState) => state.auth.lastName);
    const email = useSelector((state: RootState) => state.auth.email);

    // redux gelecek bu deyer
    const userID = 11;
    console.log(username, firstname, lastname, email);

    const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
        initialValues: {
            id: userID,
            email: email && email,
            userName: username && username,
            firstName: firstname && firstname,
            lastName: lastname && lastname,
        },
        validationSchema: RegisterYup,
        onSubmit: (values) => {
            dispatch(updateUser({
                id: values.id,
                userName: values.userName,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
            }),
            ).then((confirm) => {
                if (confirm) {
                    alert('everything is under control!');
                }
            });
        }
    });

    useEffect(()=>{
        dispatch(getUserById(userID));
    }, [dispatch, userID]);

    console.log(values, "sla");

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

                        <button type="submit" className="block bg-[#B88E2F] text-white font-medium text-lg md:w-[30%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600">Save Changes</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ProfileEdit