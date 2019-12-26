import React, { Component } from 'react';
import './Controls.css'

export default class Controls extends Component {
    render() {
        return(
            <div className="buttons">
                <button className="directionButton" onClick={this.props.prev}>{"< Prev"}</button>
                    <button className="controlButton">Edit</button>
                    <button className="controlButton">Delete</button>
                    <button className="controlButton">New</button>
                <button className="directionButton" onClick={this.props.next}>{"Next >"}</button>
            </div>
        )
    }
}