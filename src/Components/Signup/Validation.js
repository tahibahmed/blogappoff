export default function Validation(values) {
  const errors = {};

  const email_pattern = /[A-Z0-9a-z@\._]/;
  const password_pattern =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$";

  if (values.name === "") {
    errors.name = "Name is required";
  }

  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email ditnt match";
  }
  if (values.password === "") {
    errors.password = "password is required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "password in correct";
  }
  if (!values.password === values.confirmPassword) {
    errors.confirmPassword = "password ditnt match";
  }

  return errors;
}
