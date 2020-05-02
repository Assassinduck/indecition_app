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
        {this.state.error && <p className="add-option-error" >{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOptions}>
          <input className="add-option__input" type="text" name="options"></input>
          <button className="button">submit</button>
        </form>
      </div>
    );
  }
}
