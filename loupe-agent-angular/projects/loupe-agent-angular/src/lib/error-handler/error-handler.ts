import { ErrorHandler } from '@angular/core';
import { LoupeAgent } from 'loupe-agent/dist/loupe.agent';

export class MyErrorHandler extends ErrorHandler {
  private loupe: LoupeAgent;
  
  constructor() {
    super();
    console.log("Library | MyErrorHandler is running");
    this.loupe = new LoupeAgent(window, document);
  }

  handleError(error) {
    super.handleError(error);
    console.log("Library | MyErrorHandler | handleError", error);
    alert(`Library | Error occurred:${error.message}`);
    
    this.loupe.setCORSOrigin('http://localhost:3500/');
    this.loupe.verbose('verbose', 'verbose', 'verbose description');
    this.loupe.information('info111', 'info222', 'info333');
    this.loupe.warning('warning', 'warning', 'warning description');
    this.loupe.error('error', 'error', 'error description');
    this.loupe.critical('critical', 'critical', 'critical description');
  }
}