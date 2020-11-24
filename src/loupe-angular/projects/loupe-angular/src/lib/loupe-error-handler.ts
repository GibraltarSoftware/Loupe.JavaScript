import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { LoupeService } from './loupe.service';

@Injectable()
export class LoupeErrorHandler extends ErrorHandler {

    constructor(
        private readonly loupe: LoupeService
    ) {
        super();
    }

    handleError(error: any) {
        super.handleError(error);

        // different error types have different properties
        if (error instanceof HttpErrorResponse) {
            this.recordHttpError(error);
        } else if (error instanceof ErrorEvent) {
            this.recordErrorEvent(error);
        } else {
            this.recordError(error);
        }
    }

    private recordHttpError(error: HttpErrorResponse): void {
        const details = {
            name: error.name,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
            error: error.error
        };

        // The http error response doesn't gve us a stack, so create one
        const err = new Error(error.message);
        const ex = {
            name: error.name,
            caption: error.name,
            description: error.message,
            message: err.stack
        };

        this.loupe.recordException(ex, details, error.name);
    }

    private recordError(error: Error): void {
        const parts = error.message.split('\n');

        const firstStackLine = parts[2];
        const httpStart = firstStackLine.indexOf('http');
        const httpLength = firstStackLine.length - httpStart - 1;

        const ex = {
            name: error.name,
            caption: parts[1],
            description: parts[0],
            url: firstStackLine.substr(httpStart, httpLength),
            message: error.message
        };

        const details = null;

        this.loupe.recordException(ex, details, 'Angular.Exception');
    }

    private recordErrorEvent(error: ErrorEvent): void {
        const details = {
            line: error.lineno,
            column: error.colno,
            url: error.filename
        };

        this.loupe.recordException(error, details, 'Angular.Exception.Event');
    }
}

