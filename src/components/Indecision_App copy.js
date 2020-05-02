import React from 'react';
import ReactDOM from 'react-dom'
import AddOptions from "./AddOptions";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class Indecision_app extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleModalClose = () => {
      this.setState(()=>({selectedOption: undefined}))
  }  



    
  handleDeleteOption = () => {
    this.setState(() => ({ options: [] }));
  }




  handlePick = () => {
    let optionSection = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[optionSection];
    if (this.state.options.length == 0) {
      return;
    }
    this.setState(() => ({selectedOption: option}))
  }






  handleAddOption = (option) =>{
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }




  handleDeleteOptionSingular  = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }




 
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
        console.log("valid json");
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }


  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget" >
            <Options
              deleteOptions={this.handleDeleteOption}
              options={this.state.options}
              handleDeleteOptionSingular={this.handleDeleteOptionSingular}
            />
            <AddOptions handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}

Header.defaultProps = {
  title: "Indecision"
};