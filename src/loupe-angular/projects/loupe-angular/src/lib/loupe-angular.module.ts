import { ErrorHandler, NgModule } from '@angular/core';
import { LoupeAngularComponent } from './loupe-angular.component';
import { LoupeErrorHandler } from './loupe-error-handler';
import { LoupeHeaderHttpConfigInterceptor } from "./loupe-angular.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [LoupeAngularComponent],
  imports: [],
  exports: [LoupeAngularComponent],
  providers: [
    { provide: ErrorHandler, useClass: LoupeErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: LoupeHeaderHttpConfigInterceptor, multi: true }
  ]
})
export class LoupeAngularModule { }
