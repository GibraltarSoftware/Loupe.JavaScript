# loupe-angular
<code>@gibraltarsoftware/loupe-angular</code> is a wrapper for the [Loupe TypeScript Agent](../loupe-typescript), providing logging and error handling capabilities for your Angular applications.

The module automatically creates a Loupe client logger and provides a sample Angular <code>ErrorHandler</code> that can be enabled by configuring your application providers; this enables any uncaught errors in your Angular application to be logged to Loupe. It additionally exposes the Loupe Agent to your Angular application as an injectable service named <code>LoupeService</code>.

## Installation
You can install the module via <code>npm</code>:

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

2. Import the service into your main component (<code>app.component.ts</code>)

<pre>
import { LoupeService } from '@gibraltarsoftware/loupe-angular';
</pre>

3. Inject the service into your main component (<code>app.component.ts</code>)

<pre>
  constructor(private readonly loupe: LoupeService) {
    ...
  }
</pre>

4. Set the initial properties and call the Loupe methods:

<pre>
  constructor(private readonly loupe: LoupeService) {
    // to set a unique ID for the session
    this.loupe.setSessionId(this.getGuid());

    // to set the Loupe target, if not the same domain or port
    this.loupe.setCORSOrigin('https://mysite.com');

    // to set authentication details if required by the server
    this.loupe.setAuthorizationHeader(new Header('Basic', '1234'));

    // log a message
    this.loupe.information(this.title, 'App Started', 'The client application has started');
  }
</pre>

5. Optionally configure the error handler in your application module (<code>app.module.ts</code>). You only need to do this step if you want to use the Loupe error handler for uncaught errors.

<pre>
  providers: [
    { provide: ErrorHandler, useClass: LoupeErrorHandler }
  ]
</pre>

### .NET Core and Angular

## Examples

You should set your session ID and CORS origin (if applicable) as soon as your application starts. The <code>AppComponent</code> is a good place to do this.

<pre>
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly loupe: LoupeService) {
    loupe.setSessionId('6745bc1e-e719-4bfe-b1ee-8bea50f2b17b');
    loupe.setCORSOrigin('https://myserver.com');
  }
  
}
</pre>

The <code>setCORSOrigin</code> call should be used when your application is not hosted in that same domain or port
as the server application that collects the logs.

### Error Handlers

To use the error handler, modify you <code>app.module.ts</code> and add the Loupe error handler as a provider for the Angular <code>ErrorHandler</code>.

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
    this.loupe.information(
      'JavaScript', 'Component Initialization', 'The first component is initializing',
      null, null, null, null
    );
  }
}
</pre>

### Routing
Hooking into route change events is a good way to track page changes. For this you can subscribe to router events from within <code>AppComponent</code> or the <code>AppRoutingModule</code>:

<pre>
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly loupe: LoupeService) {
    loupe.setSessionId('6745bc1e-e719-4bfe-b1ee-8bea50f2b17b');
    loupe.setCORSOrigin('https://myserver.com');

    this.router.events
    .pipe(filter(x => x instanceof NavigationStart))
    .subscribe((evnt: RouterEvent) => {
      this.loupe.information(
        "Angular", "NavigationStart", evnt.url,
        null, null, null, null
      );
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

For more usage examples see the Sample ASP.NET Core Applications:
* [ASP.NET Core application with Angular 8 frontend](../Loupe.Angular.Demo)</li>
* [ASP.NET Core application with Angular 10 frontend](../Loupe.Angular.Demo.V10)</li>

## License
This module is licensed under ISC
