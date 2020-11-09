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

    const someObject = { name: "matt", code: this.currentCount };
    this.loupe.information(
      "JavaScript", "category", "description",
      null, null,
      JSON.stringify(someObject),
      null
    );
  }

}
