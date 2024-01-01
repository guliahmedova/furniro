import { ContactFormTypes } from "../../models/ContactFormTypes";

export const validate = (values: ContactFormTypes) => {
    const errors: Partial<ContactFormTypes> = {};

    if (!values.yourName) {
        errors.yourName = 'Required';
    } else if (values.yourName.length > 15) {
        errors.yourName = 'Must be 15 characters or less';
    }

    if (!values.subject) {
        errors.subject = 'Required';
    } else if (values.subject.length > 20) {
        errors.subject = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.message) {
        errors.message = 'Required';
    } else if (values.message.length > 20) {
        errors.message = 'Must be 20 characters or less';
    }

    return errors;
};