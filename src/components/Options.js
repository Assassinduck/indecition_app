import React from "react";
import ReactDOM from 'react-dom'
import Option from "./Option";




export const Options = (props) => (
         <div>
           <div className="widget-header">
             <h3 className="widget-header widget-header--title">Your options</h3>
             <button
               className=" button button--link"
               onClick={props.deleteOptions}
             >
               Remove all
             </button>
           </div>
           {props.options.length === 0 && (
             <p>Please provide an option to get started!</p>
           )}

           {props.options.map((option) => (
             <Option
               key={option}
               optionText={option}
               handleDeleteOptionSingular={props.handleDeleteOptionSingular}
             />
           ))}
         </div>
       );



export default Options;