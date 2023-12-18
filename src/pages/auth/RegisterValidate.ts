import { AppUserType } from "../../models/AppUserType";

export const validate = (values: AppUserType) => {
    const errors: Partial<AppUserType> = {};

    if (!values.userName) {
        errors.userName = 'Required';
    } else if (values.userName.length > 15) {
        errors.userName = 'Must be 15 characters or less';
    }

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 20) {
        errors.firstName = 'Must be 20 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address format.';
    }

    //Password must contain at least one uppercase character. 
    //Password must contain at least one symbol.
    //Password must contain at least one numeric value.
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
    }else if (values.password.search(/[A-Z]/) < 0){
        errors.password = 'Password must contain at least one uppercase character.';
    }else if(values.password.search(/^(?=.*[!@#$%^&*]).+$/) < 0){
        errors.password = 'Password must contain at least one symbol.';
    }else if (values.password.search(/^(?=.*[0-9])(?=.*[!@#$%^&*]).+$/) < 0) {
        errors.password = 'Password must contain at least one numeric value.';
    }
    return errors;
};