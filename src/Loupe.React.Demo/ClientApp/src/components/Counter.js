import React, { Component } from 'react';
import loupe  from "../services/LoupeService";

export class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });

        const counterObject = { name: "counter", value: this.state.currentCount };
        loupe.information(
            "Angular", "Incrementing Counter", 'Counter is now {0}',
            [this.state.currentCount], null, counterObject, null
        );
    }

    render() {

        return (
            <div>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}
