import { Injectable } from '@angular/core';
import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript/dist/loupe.agent';
import { Header } from '@gibraltarsoftware/loupe-typescript/dist/Header';
import { MethodSourceInfo } from '@gibraltarsoftware/loupe-typescript/dist/MethodSourceInfo';

export function getWindow() { return window; }

export function getloupelibService() { return new LoupeService(getWindow()); }


@Injectable({
  providedIn: 'root',
  useFactory: getloupelibService
})
export class LoupeService {

  public loupe: LoupeAgent;
  private readonly window: Window;

  constructor(window?: any) {
    if (this.window) {
      this.window = getWindow();
    } else {
      this.window = window as Window;
    }

    this.loupe = new LoupeAgent(
      this.window, 
      this.window.document
    );
  }

  setLogServer(origin: string): void {
    this.loupe.setLogServer(origin);
  }

  setAuthorizationHeader(header: Header): void {
    this.loupe.setAuthorizationHeader(header);
  }

  information(
    category: string,
    caption: string,
    description: string,
    parameters?: any[] | null,
    exception?: any | null,
    details?: any | null,
    methodSourceInfo?: MethodSourceInfo | null
  ): void {
    this.loupe.information(category,
      caption,
      description,
      parameters,
      exception,
      details,
      methodSourceInfo
    );
  }

  verbose(
    category: string,
    caption: string,
    description: string,
    parameters?: any[] | null,
    exception?: any | null,
    details?: any | null,
    methodSourceInfo?: MethodSourceInfo | null
  ): void {
    this.loupe.verbose(
      category,
      caption,
      description,
      parameters,
      exception,
      details,
      methodSourceInfo
    );
  }

  warning(
    category: string,
    caption: string,
    description: string,
    parameters?: any[] | null,
    exception?: any | null,
    details?: any | null,
    methodSourceInfo?: MethodSourceInfo | null
  ): void {
    this.loupe.warning(
      category,
      caption,
      description,
      parameters,
      exception,
      details,
      methodSourceInfo
    );
  }

  error(
    category: string,
    caption: string,
    description: string,
    parameters?: any[] | null,
    exception?: any | null,
    details?: any | null,
    methodSourceInfo?: MethodSourceInfo | null
  ): void {
    this.loupe.error(
      category,
      caption,
      description,
      parameters,
      exception,
      details,
      methodSourceInfo
    );
  }

  critical(
    category: string,
    caption: string,
    description: string,
    parameters?: any[] | null,
    exception?: any | null,
    details?: any | null,
    methodSourceInfo?: MethodSourceInfo | null
  ): void {
    this.loupe.critical(
      category,
      caption,
      description,
      parameters,
      exception,
      details,
      methodSourceInfo
    );
  }

  public recordException(
    exception: any,
    details?: any,
    category?: string
    ): void {
      this.loupe.recordException(exception, details, category);
  }
}
