import React from "react";
import PropTypes from "prop-types";

function BlockItem({ id, color }) {
  return <div id={id} className={`box ${color}`} />;
}

BlockItem.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
};

BlockItem.defaultProps = {};

export default React.memo(BlockItem); //Memoized
