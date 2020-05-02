import React from 'react';
import ReactDOM from 'react-dom'



export const  Option = (props) => 
    <div>
      <p>
        {props.optionText}
        <button className="button button--link"  onClick={e => { props.handleDeleteOptionSingular(props.optionText); }}>Remove Option</button>
      </p>
    </div>


export default Option;