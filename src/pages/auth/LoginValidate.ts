import { LoginType } from "../../models/LoginType";

export const validate = (values: LoginType) => {
    const errors: Partial<LoginType> = {};

    if (!values.userName) {
        errors.userName = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    } 
    
    return errors;
};