import { MethodSourceInfo } from 'loupe-typescript/dist/MethodSourceInfo';
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
    this.loupe.error('Angular Client', 'Unhandled Error', 'An unhandled error was caught',
      null, error, null, new MethodSourceInfo('error-handler.ts', 'handleError', 16));
  }
}
