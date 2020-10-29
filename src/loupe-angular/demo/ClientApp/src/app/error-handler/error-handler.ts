import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from 'loupe-angular/dist/loupe-angular';
import { MethodSourceInfo } from 'loupe-typescript/dist/MethodSourceInfo';

@Injectable()
export class MyErrorHandler extends ErrorHandler {
  
  constructor(
    private readonly loupe: LoupeService
  ) {
    super();
  }

  handleError(error: any) {
    // Use built-in behaviour by including this line
    super.handleError(error);

    // Use custom behaviour here
    this.loupe.setCORSOrigin("https://localhost:44348");
    this.loupe.information(
      "Angular", "Error", "Uncaught Exception",
      null, error, null,
      new MethodSourceInfo("error.handler.ts", "handleError", 20)
    );
  }
}