import { CheckoutFormTypes } from '../../models/checkoutFormTypes';

export const validate = (values: CheckoutFormTypes) => {
    const errors: Partial<CheckoutFormTypes> = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.companyName) {
        errors.companyName = 'Required';
    } else if (values.companyName.length > 30) {
        errors.companyName = 'Must be 30 characters or less';
    }

    if (!values.country) {
        errors.country = 'Required';
    } else if (values.country.length > 30) {
        errors.country = 'Must be 30 characters or less';
    }

    if (!values.streetAddress) {
        errors.streetAddress = 'Required';
    } else if (values.streetAddress.length > 30) {
        errors.streetAddress = 'Must be 30 characters or less';
    }

    if (!values.town) {
        errors.town = 'Required';
    } else if (values.town.length > 30) {
        errors.town = 'Must be 30 characters or less';
    }

    if (!values.province) {
        errors.province = 'Required';
    } else if (values.province.length > 30) {
        errors.province = 'Must be 30 characters or less';
    }

    if (!values.zipCode) {
        errors.zipCode = 'Required';
    } else if (values.zipCode.length > 30) {
        errors.zipCode = 'Must be 30 characters or less';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone.length > 10) {
        errors.phone = 'Must be 10 characters or less';
    }

    if (!values.emailAddress) {
        errors.emailAddress = 'Required';
    } else if (values.emailAddress.length > 30) {
        errors.emailAddress = 'Must be 30 characters or less';
    }

    if (!values.note) {
        errors.note = 'Required';
    } else if (values.note.length > 30) {
        errors.note = 'Must be 30 characters or less';
    }

    if (!values.emailAddress) {
        errors.emailAddress = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
        errors.emailAddress = 'Invalid email address';
    }

    return errors;
};
