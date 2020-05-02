import React from "react";
import ReactDOM from "react-dom";

export const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.optionIndex}. {props.optionText}
    </p>

    <button className="button button--link" onClick={(e) => {
        props.handleDeleteOptionSingular(props.optionText);
      }}>Remove Option
      </button>
  </div>
);

export default Option;
