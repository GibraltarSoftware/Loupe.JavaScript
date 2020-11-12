import { Injectable } from '@angular/core';
import { LoupeErrorHandler } from '@gibraltarsoftware/loupe-angular';

@Injectable()
export class MyErrorHandler extends LoupeErrorHandler {
  
  constructor() {
      super();
  }

  handleError(error: any) {
    // Use built-in behaviour by including this line
    super.handleError(error);

    // Use custom behaviour here
    alert("MyErrorHandler");
  }
}
