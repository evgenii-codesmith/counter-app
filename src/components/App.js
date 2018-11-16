import React from 'react';

// const App = () => (

//     <div>
//         <h1>Counter</h1>
//     </div>


// );

class App extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            counter: 0
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement(){
        let newCounter = this.state.counter +1;
        this.setState({
            counter: newCounter
        });
}

    handleDecrement(){
        let newCounter = this.state.counter -1;
        this.setState({
            counter: newCounter
        });
       
    }

    handleReset(){
       
        this.setState({
            counter: 0
        });
    }

    render(){
        return (
            <div>
                <div id = 'counterWrapper'>
                    <h1>Counter {this.state.counter}</h1>
                </div>
                <div id = "buttons">
                    <button onClick = {this.handleIncrement}>+</button>
                    <button onClick = {this.handleDecrement}>-</button>
                </div>
                    <div id ='resetButton'>
                        <button onClick = {this.handleReset}>Reset</button>
                    </div>
                </div>
        );
    }
}

export default App;