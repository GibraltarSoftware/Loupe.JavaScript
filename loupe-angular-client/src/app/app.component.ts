import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoupeAgentAngularService } from 'loupe-agent-angular/dist/loupe-agent-angular';
import { filter } from 'rxjs/operators';
import { MethodSourceInfo } from 'loupe-agent/dist/MethodSourceInfo';
import { RouteChangeListenerService } from "./route-change-listener/route-change-listener.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jSAgentTest';

  constructor(
    private router: Router,
    private loupeAgentAngularService: LoupeAgentAngularService,
    // private routeChangeListenerService: RouteChangeListenerService
  ) { 
    this.loupeAgentAngularService.setCORSOrigin("https://localhost:44348");

    this.router.events.pipe(
      filter(x => x instanceof NavigationStart)
    ).subscribe((evnt: RouterEvent) => {
      this.loupeAgentAngularService.information(
        "Angular", "NavigationStart", "Route Change Started",
        null, null, JSON.stringify(evnt), 
        new MethodSourceInfo("route-change-listener.service.ts", "constructor", 12)
      );
    });
  }
}
