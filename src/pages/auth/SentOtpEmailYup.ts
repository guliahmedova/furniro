import * as Yup from 'yup';

export const SendOtpEmailYup = Yup.object({
    email: Yup.string()
        .required('Required')
        .email('Invalid email address.')
        .max(256, 'Must be 256 characters or less.'),
});
