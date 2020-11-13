# Loupe.Angular.Demo

This is an ASP.NET Core application with an Angular 10 frontend that hooks into the @gibraltarsoftware/loupe-angular package to enable client side logging to Loupe.

## Running the application

The application can be run through Visual Studio simply by pressing F5. 

The demo builds upon the ASP.NET Core Angular template by adding in calls to loupe in various locations:

* A call is made to <code>loupe.information</code> when the route changes, this is set by hooking in to the ROuter events from within <code>app.component.ts</code>

* A call is made to <code>loupe.information</code> when the counter is incremented from within <code>counter.component.ts</code>

* A call is made to <code>loupe.information</code> upon navigation to the */error* route (which does not exist). This raises an uncaught exception which is automatically picked up by the LoupeErrorHandler.

* More code examples coming soon.