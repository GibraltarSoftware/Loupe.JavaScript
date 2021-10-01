import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoupeService } from './loupe.service';

// http interceptor to automatically add the Loupe Session and Agent IDs to HTTP requests, to aid in request correlation

@Injectable()
export class LoupeHeaderHttpConfigInterceptor implements HttpInterceptor {
    private readonly loupeAgentSessionIdHeader: string;
    private readonly loupeSessionIdHeader: string;

    constructor(readonly loupeService: LoupeService) {
        this.loupeAgentSessionIdHeader = loupeService.loupe.loupeAgentSessionIdHeader;
        this.loupeSessionIdHeader = loupeService.loupe.loupeSessionIdHeader;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add the loupe headers to the request
        request = request.clone({
            headers: request.headers.set(this.loupeAgentSessionIdHeader, this.loupeService.loupe.agentSessionId)
        });
        request = request.clone({
            headers: request.headers.set(this.loupeSessionIdHeader, this.loupeService.loupe.sessionId)
        });

        return next.handle(request);
    }
}