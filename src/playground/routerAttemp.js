import React, { Component } from 'react';
import ReactDOM from 'react-dom'





class ProjectRoot extends Component {
    constructor(props) {
        super(props);



        this.state = {  }
    }




    render() { 
        return (
            <div>
            hello world
            </div>
        );
    }
}


class routerAttemp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>This is the second page</div>;
  }
}






ReactDOM.render(<ProjectRoot />, document.getElementById("app"));

