import * as Yup from 'yup';

export const LoginYup = Yup.object({
    userName: Yup.string()
        .required('Required')
        .min(5, 'Username must be at least 5 characters long.')
        .max(50, 'Must be 50 characters or less.'),

    password: Yup.string()
        .required('Required')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase character.')
        .matches(/^(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one symbol.')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one numeric value.')
        .min(8, 'Must be 8 characters or more.'),
});