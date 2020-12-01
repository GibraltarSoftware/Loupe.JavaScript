# Loupe.React.Demo

This is an ASP.NET Core application with a React frontend that hooks into the @gibraltarsoftware/loupe-typescript package to enable client side logging to Loupe.

## Running the application

The application can be run through Visual Studio simply by pressing F5. 

The demo builds upon the ASP.NET Core React template by adding in calls to loupe in various locations:

* A call is made to <code>loupe.information</code> when the counter is incremented on the Counter page.

