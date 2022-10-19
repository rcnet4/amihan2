import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "reactstrap";
import { noop } from "lodash";
import "./input-field.scss";

const InputField = (props) => {
  const {
    label,
    type,
    value,
    showLabel,
    inputTip,
    placeholder,
    textAreaSize,
    showRequiredLabel,
    labelBold,
    errorCss,
    onChange,
    ...rest
  } = props;
  const handleChange = ({ target }) =>
    onChange(target.value);

  const getInputComponent = () => {
    switch (type) {
      case "textarea":
        return (
          <div>
            {showLabel && (
              <Label
                className={labelBold ? "fw- wt-field-label" : "wt-field-label"}
                htmlFor={rest.name}
              >
                {label}
              </Label>
            )}
            {showRequiredLabel && <span className="text-danger ml-1">*</span>}
            {inputTip && <p className="tsmall1">{inputTip}</p>}
            <div>
              <Input
                {...rest}
                id={rest.name}
                style={{ height: textAreaSize }}
                type={type}
                value={value}
                placeholder={placeholder}
                className={`${errorCss}`}
                onChange={handleChange}
              />
            </div>
          </div>
        );

      default:
        return (
          <div>
            {showLabel && (
              <Label
                className={
                  labelBold ? "fw-600 wt-field-label" : "wt-field-label"
                }
                htmlFor={rest.name}
              >
                {label}
              </Label>
            )}
            {showRequiredLabel && <span className="text-danger ml-1">*</span>}
            {inputTip && <p className="tsmall1">{inputTip}</p>}
            <div>
              <Input
                {...rest}
                id={rest.name}
                type={type}
                value={value}
                placeholder={placeholder}
                className={`${errorCss}`}
                onChange={handleChange}
              />
            </div>
          </div>
        );
    }
  };

  return <div className="wt-input-field">{getInputComponent()}</div>;
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  inputTip: PropTypes.string,
  placeholder: PropTypes.string,
  textAreaSize: PropTypes.string,
  showRequiredLabel: PropTypes.bool,
  labelBold: PropTypes.bool,
  errorCss: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

InputField.defaultProps = {
  showRequiredLabel: false,
  showLabel: true,
  textAreaSize: "150px",
  labelBold: false,
  onChange: noop,
  onBlur: noop,
};

export default InputField;
