class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }

  
  componentDidMount() {

    const numStore = parseInt(localStorage.getItem('count'),10);
    
    console.log(typeof(numStore))

    if (!isNaN(numStore)) {
      this.setState(() => ({ count: numStore }))
    }
  }

  componentDidUpdate(prevProps, prevState) {


    if (prevState.count !== this.state.count) {
      const numStore = this.state.count;
      localStorage.setItem('count', numStore);
      console.log("setItem")
    }
  }
  







  
  handleIncrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  } 
  handleDecrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    })
   
  }
  handleReset() {
    this.setState(() => { return { count: 0 }})
  }
  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleReset}>reset</button>
       </div>
    );
  }
}





ReactDOM.render(<Counter />, document.getElementById("app"))