import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // render() {
    //     if (this.state.secondLeft > 0) {
    //         return ( 
    //             <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    //         )
    //     }  else {
    //         return (
    //             <p>Boom!</p>
    //         )
    //     }
    // }

    render() {
        return (
            this.state.secondsLeft !== 0 ? <div>{this.state.secondsLeft} seconds left before I go boom!</div> : <p>Boom!</p>
        )
        
    }

}