import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from './loupe.service';

@Injectable()
export class LoupeErrorHandler extends ErrorHandler {
  
  private readonly loupe: LoupeService

  constructor() {
    super();
    this.loupe = new LoupeService();
  }

  handleError(error: any) {
    super.handleError(error);
    this.loupe.information(
      "Angular", "LoupeErrorHandler", "Uncaught Exception Details",
      null, error, null, null
    );
  }
}
