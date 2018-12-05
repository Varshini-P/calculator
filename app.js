import React, { Component } from 'react';
import ResultComponent from './ResultComponent';
import KeyPadComponent from './KeyPadComponent';
import './App.css';
class App extends Component {
    constructor(){
        super();
         this.state = {
            result: ""
        }
    }
     onClick(button) {
         if(button === "="){
            this.calculate()
        }
         else if(button === "C"){
            this.reset()
        }
        else if(button === "DEL"){
            this.backspace()
        }
         else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
     calculate() {
            this.setState({
                result: eval(this.state.result)
            })
    };
     reset (){
        this.setState({
            result: ""
        })
    };
     backspace () {
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    };
     render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result1={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick.bind(this)}/>
                </div>
            </div>
        );
    }
}
 export default App;