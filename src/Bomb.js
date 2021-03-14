import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        let msg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
            <div>
                {msg}
            </div>
        )
    }

    // render() {
    //     return (
    //         this.state.secondsLeft !== 0 ? <div>{this.state.secondsLeft} seconds left before I go boom!</div> : <p>Boom!</p>
    //     )
        
    }

}