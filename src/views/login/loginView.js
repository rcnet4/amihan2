import React from "react";
import PropTypes from "prop-types";
import "./login-view.scss";
import Login from "components/features/login/Login";
import { LoginValidator } from "./validators/loginValidator";
import useAuth from "hooks/useAuth";

function LoginView() {
  const { login, loggingIn, loginError } = useAuth();

  const handleLoginSubmit = (values) => login(values);

  return (
    <section className="login-wrapper d-flex justify-content-center align-items-center">
      <Login
        validator={LoginValidator}
        loading={loggingIn}
        error={loginError}
        onFormSubmit={handleLoginSubmit}
      />
    </section>
  );
}

LoginView.propTypes = {
  containerCss: PropTypes.string,
};

LoginView.defaultProps = {};

export default LoginView;
