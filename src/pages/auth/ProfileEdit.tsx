import { useFormik } from 'formik';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getUserById, updateUser } from "../../redux/features/authSlice";
import { RegisterYup } from "./RegisterYup";

const MySwal = withReactContent(Swal);

const ProfileEdit = () => {
    const dispatch = useAppDispatch();
    const { userName, lastName, firstName, email } = useSelector((state: RootState) => state.auth);
    const userId = localStorage.getItem('userId');

    const currentSaveBtn = useRef<HTMLButtonElement>(null);

    const userID_Int = useMemo(() => {
        if (userId) {
            return parseInt(userId);
        };
    }, [userId]);

    const initialFormValues = {
        email: email || '',
        userName: userName || '',
        firstName: firstName || '',
        lastName: lastName || '',
    };

    const { handleChange, values, handleSubmit, errors, setValues } = useFormik({
        initialValues: initialFormValues,
        validationSchema: RegisterYup,
        onSubmit: () => { }
    });

    useEffect(() => {
        if (userName && lastName && firstName && email) {
            setValues({
                email,
                userName,
                firstName,
                lastName,
            });
        }
    }, [userName, lastName, firstName, email, setValues]);

    const isFormModified = useMemo(
        () => JSON.stringify(values) !== JSON.stringify(initialFormValues),
        [values, initialFormValues]
    );

    useEffect(() => {
        if (userID_Int) {
            dispatch(getUserById(userID_Int));
        }
    }, [dispatch, values, userID_Int]);

    const handleBtnClick = useCallback(() => {
        if (!isFormModified) {
            currentSaveBtn.current?.classList.add("shaking-animate");
            setTimeout(() => {
                currentSaveBtn.current?.classList.remove('shaking-animate');
            }, 1000);
        }
        else if (userID_Int && isFormModified) {
            currentSaveBtn.current?.classList.remove("shaking-animate");
            dispatch(updateUser({
                id: userID_Int,
                userName: values.userName,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
            })).then((confirm) => {
                if (confirm?.payload) {
                    MySwal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your profile has been updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.error(error);
            })
        }
    }, [values]);

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

                        <button type="submit" ref={currentSaveBtn} onClick={handleBtnClick} className="block bg-[#B88E2F] text-white font-medium text-lg md:w-[30%] w-full ml-auto py-4 rounded-md mt-5 hover:bg-yellow-600">Save Changes</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ProfileEdit