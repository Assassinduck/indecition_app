

class BuildItVisibility extends React.Component {
    constructor(props) {
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
             visible: false
        }
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.visible ? 'Hide text' : 'Show text'}</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide' : 'Show'}</button>
                {this.state.visible && <div>Text that you can see</div>}

            </div>
        )
    }
}


ReactDOM.render(<BuildItVisibility/> , document.getElementById("app"))