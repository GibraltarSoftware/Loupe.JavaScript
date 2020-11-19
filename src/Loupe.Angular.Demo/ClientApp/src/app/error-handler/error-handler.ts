import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from '@gibraltarsoftware/loupe-angular';

@Injectable()
export class MyErrorHandler extends ErrorHandler {

  constructor(
    private readonly loupe: LoupeService
  ) {
    super();
  }

  handleError(error: any) {
      // Use custom behaviour here
      this.loupe.error(
        'Angular', 'Error', 'Uncaught Exception',
        null, error, null, null
      );

    // Use built-in behaviour by including this line
    super.handleError(error);
  }
}
