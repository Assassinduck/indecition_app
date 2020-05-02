import React from 'react';
import ReactDOM from 'react-dom'


class Visible extends React.Component {
 
    state = { 
          visible: false
    }
    
    handleVisibilityChange = () => {
        const visible = this.state.visible
        this.setState((prevState) => { return { visible: !prevState.visible }})
    }
    
    render() { 
        return ( 

            <div>
                {this.state.visible && <p>you can see this</p>}
                <button onClick={ this.handleVisibilityChange}>click se button</button>
            </div>
         );
    }
}
 



ReactDOM.render(<Visible/>, document.getElementById("app"))