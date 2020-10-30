import { Injectable } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoupeService } from 'loupe-angular/dist/loupe-angular';
import { MethodSourceInfo } from 'loupe-typescript/dist/MethodSourceInfo';

@Injectable({
  providedIn: 'root'
})
export class RouteChangeListenerService {

  constructor(
    private router: Router,
    private loupe: LoupeService
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
