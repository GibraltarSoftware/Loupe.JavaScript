# loupe-angular
**@gibraltarsoftware/loupe-angular** is a wrapper for the [Loupe TypeScript Agent](../loupe-typescript), providing logging and error handling capabilities for your Angular applications.

The module automatically creates a Loupe client logger and provides a sample Angular <code>ErrorHandler</code> that can be enabled by configuring your application providers; this enables any uncaught errors in your Angular application to be logged to Loupe. It additionally exposes the Loupe Agent to your Angular application as an injectable service named <code>LoupeService</code>.

## Installation
You can install the module via **npm**:

<pre>
npm install @gibraltarsoftware/loupe-angular
</pre>

All Loupe client logging is designed to send log information to a server which handles logging to a Loupe server; please refer to the [main documentation](../../README.md) for references to the server logging portion, as installation and configuration depends upon your server.

The Loupe Angular client logging works in both Angular 8 and Angular 11.

## Installation and Execution Steps

The following detail the exact steps required to enable Loupe logging in your Web applications.

1. Install Loupe

<pre>
npm install @gibraltarsoftware/loupe-angular
</pre>

2. Import the service into your main component (**app.component.ts**)

<pre>
import { LoupeService } from '@gibraltarsoftware/loupe-angular';
</pre>

3. Inject the service into your main component (**app.component.ts**)

<pre>
  constructor(private readonly loupe: LoupeService) {
    ...
  }
</pre>

4. Set the initial properties and call the Loupe methods:

<pre>
  constructor(private readonly loupe: LoupeService) {
    // to set the Loupe target, if not the same domain or port
    this.loupe.setLogServer('https://mysite.com');

    // log a message
    this.loupe.information(this.title, 'App Started', 'The client application has started');
  }
</pre>

5. Optionally configure the error handler in your application module (**app.module.ts**). You only need to do this step if you want to use the Loupe error handler for uncaught errors.

<pre>
  providers: [
    { provide: ErrorHandler, useClass: LoupeErrorHandler }
  ]
</pre>

### .NET Core and Angular

For a .NET Core Web Application using Angular, you need to install both the server and client components. 

1. Install server component, a package **Loupe.Agent.AspNetCore** that can be installed via NuGet in the Visual Studio Package Manager, or from the command line:

<pre>
dotnet add package Loupe.Agent.AspNetCore
</pre>

2. Configure the server component to log to Loupe and to accept client requests. In **Startup.cs****, add the following to the <code>ConfigureServices</code> method:

<pre>
services.AddLoupe().AddClientLogging();
</pre>

3. Add the following to the endpoint configuration, in the <code>Configure</code> method:

<pre>
endpoints.MapLoupeClientLogger();
</pre>

The endpoint configuration should now look like:

<pre>
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");

    endpoints.MapLoupeClientLogger();
});
</pre>

4. Install the client package from NPM. The simplest way to do this is to right-mouse click on the **ClientApp**** folder and select **Open in Terminal**. Then from the terminal, install the NPM package:

<pre>
npm install @gibraltarsoftware/loupe-angular
</pre>

5. You can now import and use the service, starting in **app.component.ts**:

<pre>
import { Component } from '@angular/core';
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private readonly loupe: LoupeService) {
    this.loupe.information(this.title, 'App Started', 'The application has started');
  }
}
</pre>

When you run your application you will now see a message logged to Loupe; if you use the browser developer tools you can see a log pessage being sent to the server, and you can use [Loupe Desktop](https://onloupe.com/local-logging/free-net-log-viewer) to view the message in more detail.

## Examples

You should set the log server (if applicable) as soon as your application starts. The **AppComponent** is a good place to do this.

<pre>
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly loupe: LoupeService) {
    loupe.setLogServer('https://myserver.com');
  }
  
}
</pre>

The <code>setLogServer</code> call should be used when your application is not hosted in that same domain or port
as the server application that collects the logs. Note that your server application will need to support CORS for your client application.

### Error Handlers

To use the error handler, modify you **app.module.ts** and add the Loupe error handler as a provider for the Angular <code>ErrorHandler</code>.

<pre>
  providers: [
    { provide: ErrorHandler, useClass: LoupeErrorHandler }
  ]
</pre>

You can of course, create your own error handler to log uncaught errors to Loupe

### Service Usage
In other components you follow the same injection pattern, by using the Loupe service:

<pre>
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private readonly LoupeService: LoupeService
  ) { }

  ngOnInit(): void {
    this.loupe.information('JavaScript', 'Component Initialization', 'The first component is initializing');
  }
}
</pre>

### Routing
Hooking into route change events is a good way to track page changes. For this you can subscribe to router events from within **AppComponent** or the **AppRoutingModule**:

<pre>
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly loupe: LoupeService) {
    loupe.setLogServer('https://myserver.com');

    this.router.events
    .pipe(filter(x => x instanceof NavigationStart))
    .subscribe((evnt: RouterEvent) => {
      this.loupe.information("Angular", "NavigationStart", evnt.url);
    });
  }
  
}

</pre>

### Error Handlers
While the Loupe Angular package provides a default error handler for you to use as a provider, you can of course, create your own handler for this purpose. Create your own Error Handler class by extending <code>ErrorHandler</code> and define your own custom behaviour to log to Loupe:

<pre>
import { Injectable } from '@angular/core';
import { LoupeErrorHandler } from '@gibraltarsoftware/loupe-angular';

@Injectable()
export class MyErrorHandler extends LoupeErrorHandler {
  
  constructor(private readonly loupe: LoupeService) {
      super();
  }

  handleError(error: any) {
    // Use built-in behaviour by including this line
    super.handleError(error);

    // Use custom behaviour here
    this.loupe.recordException(error, null, 'Uncaught Exception');
  }
}
</pre>

The <code>recordException</code> method wraps up some intelligence to extract error details and a stack trace (if available) from the supplied error. The supplied <code>LoupeErrorHandler</code> identifies different error types and 

Once defined, you provide the handler in your providers array in AppModule:

<pre>

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

</pre>

### Source Information
When an exception is passed into one of the logging methods, the agent will extract the source code information from the stack trace. 
Without the exception this is not an automatic procedure for performance reasons. However, you can manually supply the details using the
<code>MethodSourceInfo</code> parameter. For example:

<pre>
  public incrementCounter() {
    this.currentCount++;

    const someObject = { name: "test", code: 123 };
    this.loupe.information(
      "Angular", "Incrementing Counter", 'Counter is now {0}',
      [this.currentCount], null, JSON.stringify(someObject), 
      new MethodSourceInfo("counter.component.ts", "incrementCounter", 23)
    );
  }
</pre>

<code>MethodSourceInfo</code> takes four parameters:

1. File name
2. Method name
3. An optional line number
4. An optional column number

Do remember though, that the line and column numbers don't update if you change your code.

### More Examples

For more usage examples see the Sample ASP.NET Core Applications:
* [ASP.NET Core application with Angular 8 frontend](../Loupe.Angular.Demo)</li>
* [ASP.NET Core application with Angular 10 frontend](../Loupe.Angular.Demo.V10)</li>

## License
This module is licensed under ISC
