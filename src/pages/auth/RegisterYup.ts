import * as Yup from 'yup';

export const RegisterYup = Yup.object({
    userName: Yup.string()
        .required('Required')
        .min(5, 'Username must be at least 5 characters long.')
        .max(50, 'Must be 50 characters or less.'),

    firstName: Yup.string()
        .required('Required')
        .max(50, 'Must be 50 characters or less.'),

    lastName: Yup.string()
        .required('Required')
        .max(50, 'Must be 50 characters or less.'),

    email: Yup.string()
        .required('Required')
        .email('Invalid email address.')
        .max(256, 'Must be 256 characters or less.'),

    password: Yup.string()
        .required('Required')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase character.')
        .matches(/^(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one symbol.')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one numeric value.')
        .min(8, 'Must be 8 characters or more.'),
});
