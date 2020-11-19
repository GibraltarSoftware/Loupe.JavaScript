import { Component } from '@angular/core';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { LoupeService } from '@gibraltarsoftware/loupe-angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router,
    private loupe: LoupeService
  ) {
    loupe.setSessionId('6745bc1e-e719-4bfe-b1ee-8bea50f2b17b');
    loupe.setCORSOrigin('https://localhost:44348/');

    this.router.events.pipe(
      filter(x => x instanceof NavigationStart)
    ).subscribe((evnt: RouterEvent) => {
      this.loupe.information(
        'Angular', 'NavigationStart', evnt.url,
        null, null, evnt, null
      );
    });
  }
}
