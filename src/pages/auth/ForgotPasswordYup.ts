import * as Yup from 'yup';

export const ForgotPasswordYup = Yup.object({
    email: Yup.string()
        .required('Required')
        .email('Invalid email address.')
        .max(256, 'Must be 256 characters or less.'),

    newPassword: Yup.string()
        .required('Required')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase character.')
        .matches(/^(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one symbol.')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one numeric value.')
        .min(8, 'Must be 8 characters or more.'),

    repeatNewPassword: Yup.string()
        .required('Required')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase character.')
        .matches(/^(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one symbol.')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one numeric value.')
        .min(8, 'Must be 8 characters or more.'),
});