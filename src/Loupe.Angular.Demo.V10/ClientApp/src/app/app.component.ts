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
    loupe.setLogServer('https://localhost:44325');

    this.router.events.pipe(
      filter(x => x instanceof NavigationStart)
    ).subscribe((evnt: RouterEvent) => {
      this.loupe.information(
        "Angular", "NavigationStart", evnt.url,
        null, null, JSON.stringify(evnt), null
      );
    });
  }
}
