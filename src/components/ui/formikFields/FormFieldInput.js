//
// by rcnet
//
import React from "react";
import { FormGroup } from "reactstrap";
import PropTypes from "prop-types";
import { useField } from "formik";
import InputField from "components/ui/inputField/InputField";
import ValidationMessage from "./validationMessage/ValidationMessage";
import { noop } from "lodash";
//import useFastField from "../hooks/useFastField";
import { getStyles } from "./helpers";

const FormFieldInput = ({
  name,
  validate,
  allowFieldErrorBorder,
  onInputConvertValue,
  onOutputConvertValue,
  ...rest
}) => {
  const [field, meta, helpers] = useField({ name, validate }); //useFastField({ name, validate });

  const handleChange = (value) => {
    helpers.setValue(value);
  };

  return (
    <>
      <FormGroup>
        <InputField
          {...rest}
          {...field}
          errorCss={getStyles(allowFieldErrorBorder, meta)}
          value={field.value}
          name={name}
          onChange={handleChange}
        />
        <ValidationMessage name={name} />
      </FormGroup>
    </>
  );
};

FormFieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  inputTip: PropTypes.string,
  placeholder: PropTypes.string,
  showRequiredLabel: PropTypes.bool,
  labelBold: PropTypes.bool,
  allowFieldErrorBorder: PropTypes.bool,
  onChange: PropTypes.func,
  validate: PropTypes.func,
};

FormFieldInput.defaultProps = {
  showRequiredLabel: false,
  labelBold: false,
  allowFieldErrorBorder: true,
  onChange: noop,
  validate: noop,
};

export default FormFieldInput;
