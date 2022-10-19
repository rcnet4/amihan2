import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 2;
  border-color: red;
  margin-top: 5px;
`;

function RcButton({
  children,
  buttonType,
  loading,
  disabled,
  size,
  block,
  color,
  onClick,
  ...rest
}) {
  return (
    <Button
      {...rest}
      type={buttonType}
      className={`mr-2`}
      size={size}
      color={color}
      block={block}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? (
        <PulseLoader
          css={override}
          sizeUnit={"px"}
          size={12}
          color={"#fff"}
          loading={true}
        />
      ) : (
        <span>{children}</span>
      )}
    </Button>
  );
}

RcButton.propTypes = {
  children: PropTypes.string,
  buttonType: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

RcButton.defaultProps = { color: "primary" };

export default RcButton;
