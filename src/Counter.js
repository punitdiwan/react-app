import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:this.props.startAt
        }
    }   
    clickHandler = () =>  this.setState((oldState) => ({ count: oldState.count + 1 }) );
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >{this.state.count}</button>
            </div>
        )
    }
}
