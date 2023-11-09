export default function Validation(values) {

  const errors = {};

  const email_pattern = /[A-Z0-9a-z@\._]/
  const password_pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"

  if (values.name === "") {
    errors.name = "Name is required";
  }

  if (values.email === "") {
    errors.email = "Email is required";
  } 
  else if (!email_pattern.test(values.email)) {
    errors.email = "Email ditnt match";
  }

  return errors;
}
