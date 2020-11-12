import { ErrorHandler, NgModule } from '@angular/core';
import { LoupeAngularComponent } from './loupe-angular.component';
import { LoupeErrorHandler } from './loupe-error-handler';

@NgModule({
  declarations: [LoupeAngularComponent],
  imports: [],
  exports: [LoupeAngularComponent],
  providers: [
    { provide: ErrorHandler, useClass: LoupeErrorHandler }
  ]
})
export class LoupeAngularModule { }
