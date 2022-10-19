import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const LoginValidator = Yup.object().shape({
  userName: Yup.string()
    .required("User name is required"),
    //.email("Enter a valid user name/email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must contain 6 or more characters"),
});
