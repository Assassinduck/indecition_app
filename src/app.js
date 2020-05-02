import ReactDOM from 'react-dom'
import React from 'react';
import Indecision_app from './components/Indecision_App'
import "normalize.css/normalize.css"
import "./styles/styles.scss"




//if you try to this bind a function, it wont work seeing as functions have an unbound thins context by default
ReactDOM.render(<Indecision_app/>, document.getElementById("app"));


