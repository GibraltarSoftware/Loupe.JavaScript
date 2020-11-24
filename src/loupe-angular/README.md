# loupe-angular
<code>@gibraltarsoftware/loupe-angular</code> is a wrapper for the [Loupe TypeScript Agent](../loupe-typescript), providing logging and error handling capabilities for your Angular applications.

The module automatically creates a Loupe client logger and hooks into the <code>ErrorHandler</code> of Angular, so that any uncaught errors in your Angular application are logged to Loupe, enabled by configuring your application providers. It additionally exposes the Loupe Agent to your Angular application as an injectable service named <code>LoupeService</code>.

## Installation
You can install the module via <code>npm</code>:

<pre>
npm install @gibraltarsoftware/loupe-angular
</pre>

## Installation and Execution Steps

### Angular 8
### Angular 10
### React
### JavaScript

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
Hooking into route change events is a good way to track page changes. For this you can subscribe to router events from within AppComponent:

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
While the Loupe Angular package provides a default error handler for you to use as a provider, you can of course, create your own handler for this purpose. Create your own Error Handler class by extending ErrorHandler and define your own custom behaviour to log to Loupe:

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
This module is licensed under ...
