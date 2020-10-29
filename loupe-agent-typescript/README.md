# loupe-typescript
<code>loupe-typescript</code> is a Loupe Agent for web browser applications.

The agent will hook into the <code>window.onerror</code> event to automatically log any uncaught JavaScript errors.

Use of the agent needs to be combined with a server component to correlate the actions your user performs client side with the corresponding server side processing, giving you a better insight into end to end functionality. See the [project readme](../README.md) for more details.

## Installation
You can install the module via <code>npm</code>:

<pre>
npm install loupe-agent
</pre>

## API
* critical(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: * MethodSourceInfo | null) - write a categorized Crticial message to Loupe.
* error(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: * MethodSourceInfo | null) - write a categorized Error message to Loupe.
* information(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: MethodSourceInfo | null) - write a categorized Information message to Loupe.
* warning(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: * MethodSourceInfo | null) - write a categorized Warning message to Loupe.
* verbose(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?:MethodSourceInfo | null) - write a categorized Verbose message to Loupe.
* write(severity: LogMessageSeverity, category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any |null, methodSourceInfo?: MethodSourceInfo | null) - write a categorized message to Loupe.
* setSessionId(value: string) - set the client session id.
* setCORSOrigin(value: string | null) - set the target endpoint for log message. If not set, the current host is used with the default log point of <code>/Loupe/Log</code>.
* setAuthorizationHeader(header: Header) - sets the <code>Authorization</code> header to send when logging to Loupe.

* clientSessionHeader() - gets the <code>Header</code> used as the agent session id.
* resetMessageInterval(interval: number) - resets the interval used to batch up and send messages. This interval starts at 10 milliseconds and increases if there are failures to send; messages are stored in the browser local storage and resent in order when communication is restored.
* addSendMessageCommandToEventQueue() - immediately send any queued messages.

The <code>critical</code>, <code>error</code>, <code>information</code>, <code>warning</code> and <code>verbose</code> methods are all convenience wrappers over the <code>critical</code> method. For these, the parameters are:

* category - The application subsystem or logging category that the log message is associated with, which supports a dot-delimited hierarchy (eg the logger name).
* caption - A simple single-line message caption. (Will not be processed for formatting).
* description - Additional multi-line descriptive message (or may be null) which can be a format string followed by corresponding args.
* parameters - Optional. A variable number of arguments referenced by the formatted description string (or no arguments to skip formatting).
* exception - Optional. The error details. This can be a string detailing the exception, an <code>Exception</code> object, or a JavaScript <code>Error</code> object.
* details - Optional. A JSON object, or string version of, with additional details to be logged and shown in the details in Loupe Desktop and Loupe Server. This is useful for passing context information or state information that could be useful for diagnostics.
* methodSourceInfo - Optional. Details of the file, method, line and column number. This allows source information to be passed without the performance overhead of working out the current file and line (eg by examining the stack, which may well be different with compressed source, especially if source maps are not being used).

## Examples

The first step to using Loupe is to create an instance of the agent, passing in the <code>window</code> and <code>document</code> objects:

<pre>
const loupe = new LoupeAgent(window, document);
</pre>

Next, set an id for the client session. The <code>id</code> can be any unique number, but we recommend a guid:

<pre>
loupe.setSessionId('6745bc1e-e719-4bfe-b1ee-8bea50f2b17b');
</pre>

If your server project is hosted on a different domain or port, then you'll need to set the target:

<pre>
loupe.setCORSOrigin('https://myserver.com/');
</pre>

Next, start logging:

<pre>
loupe.information('Web', 'Application Started', 'The application has started');
</pre>

The <code>description</code> supports C# style string formatting parameters, which should be passed as an array in <code>parameters</code>. For example:

<pre>
loupe.information('Web', 'Event Occurred', 'User event occurred\r\nUser: {0}\r\nEvent: {1}',
    [user.name, event.name]);
</pre>

For errors and additional details you can use:

<pre>
const err = new Error('Custom application error details');
loupe.error('Web', 'Error Occurred', 'An error occurred', null, err,
    {user: user.name, state: app.state});
</pre>

The additional details parameter cab be either a string or a JSON object.

To addition source information you can use the <code>MethodSourceInfo</code>:

<pre>
const err = new Error('Custom application error details');
loupe.error('Web', 'Error Occurred', 'An error occurred', null, err,
    {user: user.name, state: app.state},
    new MethodSourceInfo('index.js', 'init', 47));
</pre>

For me examples, see the [sample project](../sample-project).

## Dependencies
* [stacktrace-js](https://www.npmjs.com/package/stacktrace-js) for stack trace handling for uncaught window errors.
* [platform](https://www.npmjs.com/package/platform) for obtaining platform details fo the client

## License
This module is licensed under ...