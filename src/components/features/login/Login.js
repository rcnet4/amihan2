import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";
import { Formik } from "formik";
import Form from "./Form";
import RcButton from "components/ui/button/RcButton";

function Login({ containerCss, validator, loading, error, onFormSubmit }) {
  console.log(loading);
  return (
    <section className={`login-component shadow-lg rounded ${containerCss}`}>
      <div className="text-center login-title">
        <h2>Login</h2>
      </div>
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={validator}
          onSubmit={onFormSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <>
              <Form />
              <RcButton
                buttonType="submit"
                block={true}
                loading={loading}
                onClick={handleSubmit}
              >
                Login
              </RcButton>
              <div className="my-3 login-error text-center">{error}</div>
            </>
          )}
        </Formik>
      </div>
    </section>
  );
}

Login.propTypes = {
  containerCss: PropTypes.string,
  validator: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  onFormSubmit: PropTypes.func,
};

Login.defaultProps = { onFormSubmit: noop };

export default Login;
