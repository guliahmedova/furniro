import * as Yup from 'yup';

export const ChangePasswordYup = Yup.object({
    currentPassword: Yup.string()
        .required('Required')
        .min(5, 'Username must be at least 5 characters long.')
        .max(50, 'Must be 50 characters or less.'),

    newPassword: Yup.string()
        .required('Required')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase character.')
        .matches(/^(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one symbol.')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*]).+$/, 'Password must contain at least one numeric value.')
        .min(8, 'Must be 8 characters or more.'),

    repeatNewPassword: Yup.string()
        .required("This field is required")
        .oneOf([Yup.ref("newPassword")], "Passwords does not match"),
});     