import { Component, OnInit } from '@angular/core';
import { LoupeAgent } from 'loupe-agent/dist/loupe.agent';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private readonly window: Window,
    private readonly document: Document
  ) { }

  ngOnInit(): void {
    console.log("Second Component Loaded");
  }

  onRasieErrorClicked(doesNotExist: Function): void {
    doesNotExist();

    // const loupe = new LoupeAgent(this.window, this.document);
    // loupe.setCORSOrigin('http://localhost:3500/');
    // loupe.verbose('verbose', 'verbose', 'verbose description');
    // loupe.information('info111', 'info222', 'info333');
    // loupe.warning('warning', 'warning', 'warning description');
    // loupe.error('error', 'error', 'error description');
    // loupe.critical('critical', 'critical', 'critical description');
  }

  
}
