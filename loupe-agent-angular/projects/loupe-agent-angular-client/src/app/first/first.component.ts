import { Component, OnInit } from '@angular/core';
import { LoupeAgent } from 'loupe-agent/dist/loupe.agent';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private readonly window: Window,
    private readonly document: Document
  ) { }

  ngOnInit(): void {
    console.log("First Component Loaded");

    try {
      var a = 123;
      var b = "456";
      //var c = a.charAt(1);
      //console.log("c = ", c);
    }
    catch(ex) {
      //console.log("Caught error", ex);
    }

    //var d = b.charAt(1);
    //console.log("d = ", d);

    // const loupe = new LoupeAgent(this.window, this.document);
    // loupe.setCORSOrigin('http://localhost:3500/');
    // loupe.verbose('verbose', 'verbose', 'verbose description');
    // loupe.information('info111', 'info222', 'info333');
    // loupe.warning('warning', 'warning', 'warning description');
    // loupe.error('error', 'error', 'error description');
    // loupe.critical('critical', 'critical', 'critical description');
  }

  onRasieErrorClicked(doesNotExist: Function): void {
    try{
      doesNotExist();
    }
    catch(error) {
      console.log("I caught your error: ", error)
    }
  }
}
