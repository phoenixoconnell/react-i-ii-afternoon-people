import React, { Component } from "react";
import './Display.css'

export default class Display extends Component {
    constructor() {
        super();

    }

    
    render() {
        return (
            <div className="displayContainer">
                    <div className="counter">
                        <span>{this.props.current.id}/{this.props.count}</span>
                    </div>
                <div className="containerBox">    

                    <div className="name bold">
                        <span>{this.props.current.name.first} {this.props.current.name.last}</span>
                    </div>
                    <br />
                    <div className="basicInfo">
                        <span><span className="bold">From: </span>{`${this.props.current.city}, ${this.props.current.country}`}</span>
                    </div>

                    <div className="basicInfo">
                        <span><span className="bold">Job Title: </span>{this.props.current.title}</span>
                    </div>

                    <div className="basicInfo">
                        <span><span className="bold">Employer: </span>{this.props.current.employer}</span>
                    </div>
                    <br />
                    <div className="favMovies">
                        <span className="bold">Favorite Movies:</span>
                        <ol className="list">
                            {this.props.current.favoriteMovies.map((e, i) => <li key={i}>{e}</li>)}
                        </ol>
                    </div>
                </div>    
            </div>
        )
    }
}