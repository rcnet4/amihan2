import React from "react";
import PropTypes from "prop-types";
import FormFieldInput from "components/ui/formikFields/FormFieldInput";

function Form({ containerCss }) {
  return (
    <section className={containerCss}>
      <FormFieldInput
        type="text"
        name="userName"
        showLabel={true}
        label="User Name"
      />
      <FormFieldInput
        type="password"
        name="password"
        showLabel={true}
        label="Password"
      />
    </section>
  );
}

Form.propTypes = {
  containerCss: PropTypes.string,
};

Form.defaultProps = {};

export default Form;
