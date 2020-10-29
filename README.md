# Loupe.JavaScript

This repository contains the Loupe Agent for modern web clients, which brings a lot of the familiar Loupe Agent functionality to client side logging, recording uncaught exceptions and allowing you to log messages to Loupe from your TypeScript and JavaScript code.

There are several projects:

* loupe-typescript. The base agent, usable directly in TypeScript and JavaScript applications.
* loupe-angular. A wrapper module that wraps the agent for use in modern Angular, hooking into Angular's <code>ErrorHandler</code> and automatically logging an error, as well as exposing the Loupe Agent as an injectable service for use in components.
* angular-demo. An Angular application that shows the use of the Loupe Agent Angular wrapper.

Use of the agent needs to be combined with a server component to correlate the actions your user performs client side with the corresponding server side processing, giving you a better insight into end to end functionality. The server component depends upon your technology stack, and can be one of:

* ASP.NET (MVC or WebForms) with IIS, using the [Loupe.Web.Module](https://www.nuget.org/packages/Loupe.Agent.Web.Module/)
* .NET Core, using the [Loupe.Agent.Core](https://github.com/GibraltarSoftware/Loupe.Agent.Core), which contains the client logging endpoint
* A custom endpoint for receiving messages. If this is something you want to do please reach out to us so we can help with message formats, etc.

## Using an Agent
Both the base agent and the Angular agent are installable via NPM. See the individual README files for more details.

## License
This module is licensed under ...

## Contributing
Feel free to branch this project and contribute a pull request to the development branch. 
If your changes are incorporated into the master version they'll be published out for everyone to use!
