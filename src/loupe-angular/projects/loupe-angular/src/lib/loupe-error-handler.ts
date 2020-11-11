import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from './loupe.service';

@Injectable()
export class LoupeErrorHandler extends ErrorHandler {
  
  constructor(private readonly loupe: LoupeService) {
    super();
  }

  handleError(error: any) {
    super.handleError(error);
    this.loupe.information(
      "Angular", "Uncaught Exception", "Exception Details",
      null, error, null, null
    );
  }
}
