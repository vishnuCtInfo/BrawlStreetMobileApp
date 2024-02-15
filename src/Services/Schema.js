import * as Yup from 'yup';

export const Schema_login_form = Yup.object({
  email: Yup.string().email('enter valied email address').required('* required'),
  password: Yup.string().required('* required')
})


const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/;

export const Schema_signup_form = Yup.object({
  email: Yup.string().email('Enter a valid email address').required('* Required'),
  password: Yup.string()
    .matches(passwordRegex, '8 digit password, Include Capital letter, one digit, and one letter')
    .required("* Required field."),
  dob: Yup.string().required("* Required field."),
  country: Yup.string().required("* Required field."),
  state: Yup.string().required("* required field"),
  username: Yup.string().required("* Required field."),
  reference: Yup.string()
});

export const Schema_forgate_password_form = Yup.object({
  password: Yup.string()
    .matches(passwordRegex, '8 digit password, Include Capital letter, one digit, and one letter')
    .required("* Required field."),
  cpassword: Yup.string()
  .oneOf([Yup.ref('password'),null],'password must be match').required('* requreid field'),
});

export const Schema_reset_password_form = Yup.object({
  password:Yup.string().required('* required field'),
  npassword: Yup.string()
    .matches(passwordRegex, '8 digit password, Include Capital letter, one digit, and one letter')
    .required("* Required field."),
  cpassword: Yup.string()
  .oneOf([Yup.ref('password'),null],'password must be match').required('* required field'),
});
