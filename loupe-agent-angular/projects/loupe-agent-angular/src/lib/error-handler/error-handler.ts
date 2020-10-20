import { ErrorHandler } from '@angular/core';
import { LoupeAgentAngularService } from '../loupe-agent-angular.service';

export class MyErrorHandler extends ErrorHandler {
  
  constructor(
    private loupeAgentAngularService: LoupeAgentAngularService
  ) {
    super();
  }

  handleError(error) {
    super.handleError(error);
    this.loupeAgentAngularService.verbose('verbose', 'verbose', 'verbose description');
    this.loupeAgentAngularService.information('info', 'info', 'info');
    this.loupeAgentAngularService.warning('warning', 'warning', 'warning description');
    this.loupeAgentAngularService.error('error', 'error', 'error description');
    this.loupeAgentAngularService.critical('critical', 'critical', 'critical description');
  }
}