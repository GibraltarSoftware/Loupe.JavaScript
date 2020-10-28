import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeAgentAngularService } from 'loupe-agent-angular/dist/loupe-agent-angular';
import { MethodSourceInfo } from 'loupe-agent/dist/MethodSourceInfo';

@Injectable()
export class MyErrorHandler extends ErrorHandler {
  
  constructor(
    private readonly loupeAgentAngularService: LoupeAgentAngularService
  ) {
    super();
  }

  handleError(error: any) {
    // Use built-in behaviour by including this line
    super.handleError(error);

    // Use custom behaviour here
    this.loupeAgentAngularService.setCORSOrigin("https://localhost:44348");
    this.loupeAgentAngularService.information(
      "Angular", "Error", "Uncaught Exception",
      null, error, null,
      new MethodSourceInfo("error.handler.ts", "handleError", 20)
    );
  }
}