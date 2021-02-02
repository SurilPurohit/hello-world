import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    
    increment(){
        this.setState({
            count: this.state.count + 1
            },
            () => {
                console.log('Callback Value', this.state.count)
            }
        )
        console.log(this.state.count);
        
    }

    render() {
        return (
            <div>
                count: {this.state.count} 
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
