import React from "react";
import PropTypes from "prop-types";
import BlockItem from "./BlockItem";
import "./block.css";

function BlockItems({ data, containerCss }) {
  return (
    <section className={containerCss}>
      {data.map((rowObj, rIndex) => (
        <div key={rIndex} className="d-flex flex-column">
          <div className="d-flex flex-row">
            {rowObj.map((colObj, cIndex) => (
              <BlockItem
                key={cIndex}
                id={`${rIndex}-${cIndex}`}
                color={colObj.color}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

BlockItems.propTypes = {
  containerCss: PropTypes.string,
};

BlockItems.defaultProps = {};

export default BlockItems;
