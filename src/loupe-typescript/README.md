# loupe-typescript
**@gibraltarsoftware/loupe-typescript** is a Loupe Agent for web browser applications.

The agent can optionally hook into the <code>window.onerror</code> event to automatically log any uncaught JavaScript errors.

Use of the agent needs to be combined with a server component to correlate the actions your user performs client side with the corresponding server side processing,
giving you a better insight into end-to-end functionality. See the [project readme](../README.md) for more details.

## Installation
You can install the module via **npm**:

<pre>
npm install @gibraltarsoftware/loupe-typescript
</pre>

### Installation in Angular

While we receommend using [loupe-angular](../loupe-angular) for Angular applications as it wraps up additional functionality, such as auto-handling of
uncaught exceptions and the addition of correlation IDs to your HTTP requests. You can of course use the basic agent. You'll want to use the agent throughout
your application, so it needs to be globally available, and the simplest way to do this is to wrap it in a service.

1. Install the agent:

<pre>
npm install @gibraltarsoftware/loupe-typescript
</pre>

2. Create a wrapper service:

<pre>
import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript/dist/loupe.agent';

@Injectable({
  providedIn: 'root'
})
export class LoupeService {
  public loupe: LoupeAgent;

  constructor() {
    this.loupe = new LoupeAgent(window, window.document);
  }
}
</pre>

3. Configure the agent as early as possible in the application lifecycle. We recommend **app.component.ts**:

<pre>
import { LoupeService } from '../LoupeService/loupe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly loupe: LoupeService) {
    loupe.loupe.setLogServer('https://myserver.com');
  }

}
</pre>

### Installation in React

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

### Installation in NextJS

1. Install the agent:

<pre>
npm install @gibraltarsoftware/loupe-typescript
</pre>

2. Create a service to create the agent:

<pre>
import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript';

var loupe = new LoupeAgent();
loupe.sessionId = 123;
loupe.setLogServer("htpp://localhost:3001");

export default loupe
</pre>

3. Log some details:

<pre>
loupe.information("Home Page", "Home Sample Log");
</pre>

### Installation in Javascript
#### Using a Package Manager

1. Install the agent:

<pre>
npm install @gibraltarsoftware/loupe-typescript
</pre>

2. Import the agent package:

<pre>
import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript';
</pre>

3. Create a new instance of the agent:

<pre>
const loupe = new LoupeAgent(window, document);
</pre>

4. Log some details:

<pre>
const counterObject = { name: "counter", value: this.state.currentCount };
loupe.information(
    "Angular", "Incrementing Counter", 'Counter is now {0}',
    [this.state.currentCount], null, counterObject
);
</pre>

#### Without a Package Manager
If you are creating applications without a package manager, you will need to download/clone this project (loupe-typescript), build it, and use
the built Javascript agent code directly.

1. Build the project

<pre>
npm build
</pre>

The build generates a javascript source (see dist/loupe.typescript.js), which you can copy to your project folder.

2. Import the Javascript agent into your module code:

<pre>
var LoupeAgent = require("/js/loupe.typescript");
</pre>

3. Create a new instance of the agent:

<pre>
var loupe = new LoupeAgent['loupe-typescript'].LoupeAgent(window, document, platform);
</pre>

4. Log some details:
<pre>
const counterObject = { name: "counter", value: this.state.currentCount };
loupe.information(
    "Angular", "Incrementing Counter", 'Counter is now {0}',
    [this.state.currentCount], null, counterObject
);
</pre>

## Creating the Agent
Version 2 introduced a breaking change whereby the constructor arguments have changed. These are now:
* <code>window</code>. Optional. The global Window object. If supplied, the agent hooks into the "onError" method to log uncaught exceptions.
* <code>documen</code>. Optional. The global document object. If supplied, used to obtain document size for client platform details per log message, but only if platform details are also supplied.
* <code>platform</code>. Optional. The client platform details (see interface <code>ILocalPlatform</code>). If supplied they will be attached to the logged client details.

Prior versions included [platformjs](https://github.com/bestiejs/platform.js), which automatically retrieved details of the client (user agent, engine, os, etc). To allow the Loupe Agent to be used
in browserless scenarios, this dependency has been removed, but you can still pass in these platform details, either constructing them yourself, or by using platform-js and passing in the appropriate
structure. This is shown in the **loupe-angular** project.

If you wish to supply platform details, then you can install <code>platform</code> and associated types from NPM:

<pre>
npm install platform
npm install @types/platform
</pre>

You can then import platform and use the <code>clientPatform</code> as the third parameter on the constructor. Eg:

<pre>
const loupe = new LoupeAgent(window, window.document, clientPlatform as ILocalPlatform);
</pre>

If you don't wish to use platform-js, then you can just construct a platform object manually.

## You Must Set The Server Location
If you are not passing in the <code>window</code> object, you **must** set the origin of the log server, so that the agent knows where to send log messages.
You can do this via the <code>setLogServer</code> method, which should be done as soon as the agent is created.
If the server location is not specified, either directly from <code>setLogServer</code> or inferred from <code>window</code> then an error is thrown
when attempting to log messages.

<pre>
  loupe.setLogServer("https://my-api.mycompany.com");
</pre>

## CORS and Credentials
When sending log messages to your API, you may need to include credentials. The <code>setLogServer</code> has an optional parameter that allows
you to set the request credentials. For example:

<pre>
  loupe.setLogServer("https://my-api.mycompany.com", "same-origin");
</pre>

This would limit credentials to be from the same origina as the web application. Values are taken from the <code>RequestCredentials</code>, and
can be "omit", "same-origin", or "include". The default for the Loupe Agent is "include".
See [Request: credentials property](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials) for more details.

## API
* constructor(window?: Window, document?: Document, clientPlatform?: ILocalPlatform) - creates a new instance of the agent.
* critical(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: * MethodSourceInfo | null) - write a categorized Crticial message to Loupe.
* error(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: * MethodSourceInfo | null) - write a categorized Error message to Loupe.
* information(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: MethodSourceInfo | null) - write a categorized Information message to Loupe.
* warning(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?: * MethodSourceInfo | null) - write a categorized Warning message to Loupe.
* verbose(category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any | null, methodSourceInfo?:MethodSourceInfo | null) - write a categorized Verbose message to Loupe.
* write(severity: LogMessageSeverity, category: string, caption: string, description: string, parameters?: any[] | null, exception?: any | null, details?: any |null, methodSourceInfo?: MethodSourceInfo | null) - write a categorized message to Loupe.
* recordException(exception: any, details?: any, category?: string) - write an exception to Loupe. Parses out a stack trace from the exception.
* setLogServer(value: string | null) - set the target endpoint for log message. If not set, the current host is used with the default log point of <code>/Loupe/Log</code>.
* addHeader(header: Header) - add the <code>header</code> to the request when logging to Loupe.

* clientSessionHeader() - gets the <code>Header</code> used as the agent session id.
* resetMessageInterval(interval: number) - resets the interval used to batch up and send messages. This interval starts at 10 milliseconds and increases if there are failures to send; messages are stored in the browser local storage and resent in order when communication is restored.
* flushToServer() - immediately send any queued messages to the server.

The <code>critical</code>, <code>error</code>, <code>information</code>, <code>warning</code> and <code>verbose</code> methods are all convenience wrappers over the <code>write</code> method. For these, the parameters are:

* category - The application subsystem or logging category that the log message is associated with, which supports a dot-delimited hierarchy (eg the logger name).
* caption - A simple single-line message caption. (Will not be processed for formatting).
* description - Additional multi-line descriptive message (or may be null) which can be a format string followed by corresponding args.
* parameters - Optional. A variable number of arguments referenced by the formatted description string (or no arguments to skip formatting).
* exception - Optional. The error details. This can be a string detailing the exception, an <code>Exception</code> object, or a JavaScript <code>Error</code> object.
* details - Optional. A JSON object, or string version of, with additional details to be logged and shown in the details in Loupe Desktop and Loupe Server. This is useful for passing contextual or state information that could be useful for diagnostics.
* methodSourceInfo - Optional. Details of the file, method, line and column number. This allows source information to be passed without the performance overhead of working out the current file and line (eg by examining the stack, which may well be different with compressed source, especially if source maps are not being used).

## Examples

The first step to using Loupe is to create an instance of the agent, optionally passing in the <code>window</code> and <code>document</code> objects. If present, window will be used to hook into
unhandled exceptions, and document will be used to get the page resolution. You can also optionally provide platform details (see the LocalPlatform interface) that will be logged along with requests; this can be manually created, or extracted from [platform-js](https://github.com/bestiejs/platform.js).

<pre>
const loupe = new LoupeAgent(window, document);
</pre>

If your server project is hosted on a different domain or port, then you'll need to set the target:

<pre>
loupe.setLogServer('https://myserver.com/');
</pre>

Next, start logging:

<pre>
loupe.information('WebClient', 'Application Started', 'The application has started');
</pre>

The <code>description</code> supports C# style string formatting parameters, which should be passed as an array in <code>parameters</code>. For example:

<pre>
loupe.information('WebClient', 'Event Occurred', 'User event occurred\r\nUser: {0}\r\nEvent: {1}',
    [user.name, event.name]);
</pre>

For errors and additional details you can use:

<pre>
const err = new Error('Custom application error details');
loupe.error('Web', 'Error Occurred', 'An error occurred', null, err,
    {user: user.name, state: app.state});
</pre>

The additional details parameter can be either a string or a JSON object.

The agent will attempt to parse stack traces and source details from the error, but to
add source information manually you can use the <code>MethodSourceInfo</code>:

<pre>
const err = new Error('Custom application error details');
loupe.error('Web', 'Error Occurred', 'An error occurred', null, err,
    {user: user.name, state: app.state},
    new MethodSourceInfo('index.js', 'init', 47));
</pre>

For me examples, see the [sample project](../loupe-typescript-demos).

## Dependencies
* [stacktrace-js](https://www.npmjs.com/package/stacktrace-js) for stack trace handling for uncaught window errors.

## License
This module is licensed under ISC