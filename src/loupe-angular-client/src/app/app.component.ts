import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoupeService } from 'loupe-angular/dist/loupe-angular';
import { filter } from 'rxjs/operators';
import { MethodSourceInfo } from 'loupe-typescript/dist/MethodSourceInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jSAgentTest';

  constructor(
    private router: Router,
    private loupe: LoupeService,
  ) { 
    this.loupe.setCORSOrigin("https://localhost:44348");

    this.router.events.pipe(
      filter(x => x instanceof NavigationStart)
    ).subscribe((evnt: RouterEvent) => {
      this.loupe.information(
        "Angular", "NavigationStart", "Route Change Started",
        null, null, JSON.stringify(evnt), 
        new MethodSourceInfo("route-change-listener.service.ts", "constructor", 12)
      );
    });
  }
}
