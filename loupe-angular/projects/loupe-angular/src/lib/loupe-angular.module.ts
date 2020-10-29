import { ErrorHandler, NgModule } from '@angular/core';
import { MyErrorHandler } from './error-handler/error-handler';
import { LoupeAngularComponent } from './loupe-angular.component';



@NgModule({
  declarations: [LoupeAngularComponent],
  imports: [],
  exports: [LoupeAngularComponent],
  providers: [
    { provide: Window, useValue: window },
    { provide: Document, useValue: document },
    { provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class LoupeAngularModule { }
