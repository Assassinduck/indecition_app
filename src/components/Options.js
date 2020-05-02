import React from "react";
import ReactDOM from "react-dom";
import Option from "./Option";

export const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header widget-header__title">Your options</h3>
      <button className=" button button--link" onClick={props.deleteOptions}>
        Remove all
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">
        Please provide an option to get started!
      </p>
    )}

    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        optionIndex={index + 1}
        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
      />
    ))}
  </div>
);

export default Options;
