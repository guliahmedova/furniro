import * as Yup from 'yup';

export const CheckoutYup = Yup.object({
    firstName: Yup.string()
        .required('Required')
        .max(15, 'Must be 15 characters or less.'),

    lastName: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less.'),

    companyName: Yup.string()
        .max(30, 'Must be 30 characters or less.'),

    country: Yup.string()
        .required('Required'),

    streetAddress: Yup.string()
        .required('Required')
        .max(30, 'Must be 30 characters or less.'),

    town: Yup.string()
        .required('Required'),

    province: Yup.string()
        .required('Required'),

    zipCode: Yup.string()
        .required('Required')
        .max(30, 'Must be 30 characters or less.'),

    phone: Yup.string()
        .required('Required')
        .max(10, 'Must be 10 characters or less.'),

    emailAddress: Yup.string()
        .required('Required')
        .email('Invalid email address.')
        .max(50, 'Must be 50 characters or less.'),

    note: Yup.string()
        .max(50, 'Must be 50 characters or less.'),
});
