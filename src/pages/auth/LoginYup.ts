import * as Yup from 'yup';

export const LoginYup = Yup.object({
    userName: Yup.string()
    .max(50, 'Must be 50 characters or less.')
    .required('Required'),

    password: Yup.string()
    .required('Required'),
});