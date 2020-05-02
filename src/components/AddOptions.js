import React from 'react';
import ReactDOM from 'react-dom'





export default class AddOptions extends React.Component {
  state = {
    error: undefined
  };


  handleAddOptions  = (e) =>{
    e.preventDefault();
    const input = e.target.elements.options.value.trim();

    const error = this.props.handleAddOption(input);
    if (!error) {
      e.target.elements.options.value = "";
    }

    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="options"></input>
          <button className="button">submit</button>
        </form>
      </div>
    );
  }
}
