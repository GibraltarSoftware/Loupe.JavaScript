import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from '../loupe.service';

@Injectable()
export class MyErrorHandler extends ErrorHandler {
  
  constructor(
    private loupe: LoupeService
  ) {
    super();
  }

  handleError(error) {
    super.handleError(error);
    this.loupe.verbose('verbose', 'verbose', 'verbose description');
    this.loupe.information('info', 'info', 'info');
    this.loupe.warning('warning', 'warning', 'warning description');
    this.loupe.error('error', 'error', 'error description');
    this.loupe.critical('critical', 'critical', 'critical description');
  }
}