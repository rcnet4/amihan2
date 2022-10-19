import React from "react";
import PropTypes from "prop-types";

const Footer = ({
  children,
  containerCss,
  containerStyle,
  contentCss,
}) => {
  return (
    <>
      <footer className={`rc-footer ${containerCss}`} style={containerStyle}>
        <div className={contentCss}>{children}</div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  containerCss: PropTypes.string,
  containerStyle: PropTypes.object,
  contentCss: PropTypes.string,
};

Footer.defaultProps = {
  containerCss: "text-center shadow",
  contentCss: "footer-content",
};

export default Footer;
