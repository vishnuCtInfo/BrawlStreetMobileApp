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
    .oneOf([Yup.ref('password'), null], 'password must be match').required('* requreid field'),
});

export const Schema_reset_password_form = Yup.object({
  password: Yup.string().required('* required field'),
  npassword: Yup.string()
    .matches(passwordRegex, '8 digit password, Include Capital letter, one digit, and one letter')
    .required("* Required field."),
  cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'password must be match').required('* required field'),
});


export const Shcema_create_game_form = Yup.object({
  name:Yup.string().required('Game Name is required'),
  game_type: Yup.string().required('Game-Type is required'),
  access_type: Yup.string().required('Access-Type is required'),
  entry_fee: Yup.string().required('Entry-Fee is required'),
  start_date: Yup.date().required('Starting Date is required'),
  start_time: Yup.string().required('Starting Time is required'),
  duration: Yup.string().required('Game Duration is required'),
  hours: Yup.string().required('Game Hours is required'),
  max_player_level: Yup.string().required('Game Player Max Level is required'),
})


// add card schema
const paymentInfoSchema = Yup.object().shape({
  credit_card: Yup.string()
  .min(16, 'Credit Card must be at least 16 digits')
  .max(16, 'Credit Card must be at most 16 digits')
  .required('Credit Card is required'),
  
  expiration_date: Yup.string().required('Expiration Date is required'),

  cvv: Yup.string()
  .min(3, 'CVV must be at least 3 digits')
  .max(3, 'CVV must be at most 3 digits')
  .required('CVV is required'),
});

const billInfoSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  country: Yup.string().required('Country is required'),
  zip_code: Yup.string()
  .min(5, 'Zip-Code must be at least 5 digits')
  .max(5, 'Zip-Code must be at most 5 digits')
  .required('Zip Code is required')
});

export const Schema_card_add = Yup.object().shape({
  payment_info: paymentInfoSchema,
  bill_info: billInfoSchema,
});
