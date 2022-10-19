import React from "react";
import { ErrorMessage } from "formik";
import "./validation-message.scss";

const ValidationMessage = ({ name, containerCss }) => (
  <div className={containerCss}>
    <ErrorMessage name={name} component="div">
      {(msg) => <div className="has-error mt-1">{msg}</div>}
    </ErrorMessage>
  </div>
);

export default ValidationMessage;
