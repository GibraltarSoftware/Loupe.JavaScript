# loupe-angular
<code>@gibraltarsoftware/loupe-angular</code> is a wrapper for the [Loupe TypeScript Agent](../loupe-typescript), providing logging and error handling capabilities for your Angular applications.

The module automatically creates a Loupe client logger and hooks into the <code>ErrorHandler</code> of Angular, so that any uncaught errors in your Angular application are logged to Loupe. It additionally exposes the Loupe Agent to your Angular application as an injectable service named <code>LoupeService</code>.

## Installation
You can install the module via <code>npm</code>:

<pre>
npm install @gibraltarsoftware/loupe-angular
</pre>

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

You follow the same pattern in other components, by using the Loupe service:

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

Subscribe to router events to log navigation changes from within AppComponent: 

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

For more usage examples see the Sample ASP.NET Core Applications:
* [ASP.NET Core application with Angular 8 frontend](../Loupe.Angular.Demo)</li>
* [ASP.NET Core application with Angular 10 frontend](../Loupe.Angular.Demo.V10)</li>

## License
This module is licensed under ...