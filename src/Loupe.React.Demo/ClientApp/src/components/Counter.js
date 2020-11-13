import React, { Component } from 'react';
import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript';

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

        const loupe = new LoupeAgent(window, document);
        loupe.setSessionId('bf8d4505-8b55-4126-afbb-cfb4cb5689fa');
        const someObject = { name: "test", code: 123, nestedObj: { a: 1 } };
        loupe.information(
            "Angular", "Incrementing Counter", 'Counter is now {0}',
            [this.state.currentCount], null, someObject, null
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
