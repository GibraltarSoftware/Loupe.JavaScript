import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from './loupe.service';

@Injectable()
export class LoupeErrorHandler extends ErrorHandler {

  private loupe: LoupeService

  constructor() {
    super();
    this.loupe = new LoupeService(window);
  }

  handleError(error: any) {
    super.handleError(error);
    this.loupe.error(
      'Angular', 'Loupe Error Handler', 'Uncaught Exception Details',
      null, error, null, null
    );
  }
}
