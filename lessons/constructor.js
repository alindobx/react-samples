import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// const title = React.createElement('h1', null, 'Welcome to edureka');
// const para1 = React.createElement('p', null, "5th  Jan, 2020");
// const para2 = React.createElement('p', null, "We are down with the crew");
//
// ReactDOM.render( [title, para1, para2], document.getElementById('root'));
const para2 = React.createElement('p',null,'Anthony');
//class Component
class App extends Component {
    constructor(){
        super();
        this.state = {subject: "We are learning ReactJs"};
    };

    render() {
        return <h1> {this.state.subject}</h1>
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
//ReactDOM.render (what react element, or is going to be displayed, DOM container Node, aka - where)

export default App;


