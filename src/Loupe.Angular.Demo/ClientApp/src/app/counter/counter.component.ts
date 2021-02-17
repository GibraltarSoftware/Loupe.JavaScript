import { MethodSourceInfo } from './../../../../../loupe-typescript/src/MethodSourceInfo';
import { Component } from '@angular/core';
import { LoupeService } from "@gibraltarsoftware/loupe-angular";

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  constructor(
    private readonly loupe: LoupeService
  ) { }

  public incrementCounter() {
    this.currentCount++;

    const someObject = { name: "test", code: 123 };
    this.loupe.information(
      "Angular", "Incrementing Counter", 'Counter is now {0}',
      [this.currentCount], null, JSON.stringify(someObject), 
      new MethodSourceInfo("counter.component.ts", "incrementCounter", 23)
    );
  }

}
