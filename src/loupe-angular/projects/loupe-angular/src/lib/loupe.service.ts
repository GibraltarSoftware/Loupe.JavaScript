import { Injectable } from '@angular/core';
import { LoupeAgent } from 'loupe-typescript/dist/loupe.agent';
import { Header } from 'loupe-typescript/dist/header';
import { MethodSourceInfo } from 'loupe-typescript/dist/MethodSourceInfo';

@Injectable({
  providedIn: 'root'
})
export class LoupeService {

  public loupe: LoupeAgent;

  constructor(
    private readonly window: Window,
    private readonly document: Document
  ) {
    this.loupe = new LoupeAgent(this.window, this.document);
  }

  setCORSOrigin(origin: string): void {
    this.loupe.setCORSOrigin(origin);
  }

  setSessionId(id: string): void {
    this.loupe.setSessionId(id);
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
}
