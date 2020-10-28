import { Injectable } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoupeAgentAngularService } from 'loupe-agent-angular/dist/loupe-agent-angular';
import { MethodSourceInfo } from 'loupe-agent/dist/MethodSourceInfo';

@Injectable({
  providedIn: 'root'
})
export class RouteChangeListenerService {

  constructor(
    private router: Router,
    private loupeAgentAngularService: LoupeAgentAngularService
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
