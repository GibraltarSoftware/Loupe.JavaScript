# Loupe.React.Demo

This is an ASP.NET Core application with a React frontend that hooks into the @gibraltarsoftware/loupe-typescript package to enable client side logging to Loupe.

## Running the application

The application can be run through Visual Studio simply by pressing F5.

The demo builds upon the ASP.NET Core React template by adding in calls to loupe in various locations:

* A call is made to <code>loupe.information</code> when the counter is incremented on the Counter page.


## Installing the Loupe Agent in React Applications

1. Install the agent:

<pre>
npm install @gibraltarsoftware/loupe-typescript
</pre>

2. Create a wrapper service (LoupeService.js):

<pre>
import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript';

var loupe = new LoupeAgent(window, window.document);

export default loupe
</pre>

3. Import the service into your component:

<pre>
import loupe  from "./LoupeService";
</pre>

4. Log some details:

<pre>
const counterObject = { name: "counter", value: this.state.currentCount };
loupe.information(
    "Angular", "Incrementing Counter", 'Counter is now {0}',
    [this.state.currentCount], null, counterObject
);
</pre>