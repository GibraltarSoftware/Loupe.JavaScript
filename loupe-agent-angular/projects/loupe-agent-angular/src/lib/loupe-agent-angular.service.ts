import { Injectable } from '@angular/core';
import { LoupeAgent } from 'loupe-agent';
import { MethodSourceInfo } from 'loupe-agent/dist/MethodSourceInfo';

@Injectable({
  providedIn: 'root'
})
export class LoupeAgentAngularService {

  loupe: LoupeAgent;

  constructor(
    private readonly window: Window,
    private readonly document: Document
  ) { 
    this.loupe = new LoupeAgent(this.window, this.document);
    this.loupe.setCORSOrigin('http://localhost:3500/');
  }

  setCORSOrigin(origin: string) {
    this.loupe.setCORSOrigin(origin);
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
