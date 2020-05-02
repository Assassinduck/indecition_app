

class Indecision_app extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);

    this.state = {
      options: []
    };
  }

  componentDidMount() {

    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
        console.log("valid json")
      }
    
    } catch (e) {
     
    }


    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }





  handleDeleteOption() {
    this.setState(() => ({ options: [] }))
  }

  handlePick() {
    let optionSection = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[optionSection]
    if (this.state.options.length == 0) {
      return;
    }
    alert(option);
  }

  handleAddOption(option) {

    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  
  }

  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) }))
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options
          deleteOptions={this.handleDeleteOption}
          options={this.state.options}
          handleDeleteOptionSingular = {this.handleDeleteOptionSingular}
        />
        <AddOptions handleAddOptions={this.handleAddOption} />
      </div>
    );
  }
}





const Header = (props) =>{
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
      );
  }

Header.defaultProps = {
  title: "Indecision",
  
  }

const Action = (props) => { 
    return (
      <div>
        <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
      </div>
    );
  }


//if you try to this bind a function, it wont work seeing as functions have an unbound thins context by default
const Options = (props) => {
    return (
      <div>
        {props.options.length === 0 && <p>Please provide an option to get started!</p>} 
        <button onClick={props.deleteOptions}>Remove all</button>
        {
          props.options.map((option) => <Option key={option} optionText={option} handleDeleteOptionSingular={props.handleDeleteOptionSingular}/> )
        }
        
      </div>
    );
  }


const Option = (props) => {
    return (
      <div>
        <p>
          {props.optionText}
          <button onClick={(e) => {props.handleDeleteOptionSingular(props.optionText);}}>Remove Option</button>
        </p>
      </div>
    );
  }


class AddOptions extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOptions = this.handleAddOptions.bind(this)
    this.state = {
      error: undefined
    };
  }


  handleAddOptions(e) {

    e.preventDefault();
    const input = e.target.elements.options.value.trim();
    
    
    const error = this.props.handleAddOptions(input);
    if (!error) {
      e.target.elements.options.value = "";
    }
   

    this.setState(() => ({ error }))
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="options"></input>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

//the props get passed into a stateless component as teh first argument, props.
//to access it, you just use props.MethodName
/* const User = (props) => {
  return (
    <div>
      <p>name: {props.name}</p>
      <p>Age: {props.age} </p>
    </div>
  )
} */


ReactDOM.render(<Indecision_app  />, document.getElementById("app"))