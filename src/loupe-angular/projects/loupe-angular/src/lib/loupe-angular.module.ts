import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, ErrorHandler } from "@angular/core";
import { LoupeAngularComponent } from './loupe-angular.component';
import { LoupeHeaderHttpConfigInterceptor } from "./loupe-angular.interceptor";
import { LoupeErrorHandler } from "./loupe-error-handler";



@NgModule({
  declarations: [
    LoupeAngularComponent
  ],
  imports: [
  ],
  exports: [
    LoupeAngularComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: LoupeErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: LoupeHeaderHttpConfigInterceptor, multi: true }
  ]
})
export class LoupeAngularModule { }
