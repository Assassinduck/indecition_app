import React from 'react';
import ReactDOM from 'react-dom'


export const Action = (props) =>
<div>
    <button className="big-button" disabled={!props.hasOptions} onClick={props.handlePick}> What should I do?</button>
</div>



export default Action;