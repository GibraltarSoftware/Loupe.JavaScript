import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

/**
 * This is an example error handler class and not used in the sample application.
 * It shows how you would use the Angular ErrorHandler to trap uncaught exceptions
 * and log them to Loupe.
 */
@Injectable()
export class MyErrorHandler extends ErrorHandler {
  
  constructor(private readonly loupe: LoupeService) {
      super();
  }

  handleError(error: any) {
    // Use built-in behaviour by including this line
    this.loupe.recordException(error, 'Uncaught Angular Error');

    // Use custom behaviour here
    alert("MyErrorHandler");
  }
}
