import { ErrorHandler, NgModule } from '@angular/core';
import { MyErrorHandler } from './error-handler/error-handler';
import { LoupeAgentAngularComponent } from './loupe-agent-angular.component';



@NgModule({
  declarations: [LoupeAgentAngularComponent],
  imports: [],
  exports: [LoupeAgentAngularComponent],
  providers: [
    { provide: Window, useValue: window },
    { provide: Document, useValue: document },
    { provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class LoupeAgentAngularModule { }
