import 'jasmine';
import { LogMessageSeverity } from '../src/LogMessageSeverity';
import { LoupeAgent } from '../src/loupe.agent';

const mockWindow = {
    location: {
        href: "http://localhost:3500/foo",
        origin: ""
    },
    onError: (msg: any, url: string, line: number, column: number, error: string) => { 
        console.log("Window.onError", msg, url, line, column, error);
    }
};
const mockDocument = {
    body: {
        clientHeight: 800,
        clientWidth: 1024
    }
};

describe('when loupe.information(...)', () => {
    it('should make call to loupe.write(...)', () => {
        // Arrange
        const loupe = new LoupeAgent(mockWindow, mockDocument);
        loupe.setCORSOrigin('http://localhost:3500/');
        spyOn(loupe, 'write');
        const severity = LogMessageSeverity.information;
        const category = "aaaaa";
        const caption = "bbbbb";
        const description = "ccccc";
        const parameters = undefined;
        const exception = undefined;
        const details = undefined;
        const methodSourceInfo = undefined;
        
        // Act
        loupe.information(
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );

        // Assert
        expect(loupe.write).toHaveBeenCalledWith(
            severity,
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );
    });
});

describe('when loupe.verbose(...)', () => {
    it('should make call to loupe.write(...)', () => {
        // Arrange
        const loupe = new LoupeAgent(mockWindow, mockDocument);
        loupe.setCORSOrigin('http://localhost:3500/');
        spyOn(loupe, 'write');
        const severity = LogMessageSeverity.verbose;
        const category = "aaaaa";
        const caption = "bbbbb";
        const description = "ccccc";
        const parameters = undefined;
        const exception = undefined;
        const details = undefined;
        const methodSourceInfo = undefined;
        
        // Act
        loupe.verbose(
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );

        // Assert
        expect(loupe.write).toHaveBeenCalledWith(
            severity,
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );
    });
});

describe('when loupe.warning(...)', () => {
    it('should make call to loupe.write(...)', () => {
        // Arrange
        const loupe = new LoupeAgent(mockWindow, mockDocument);
        loupe.setCORSOrigin('http://localhost:3500/');
        spyOn(loupe, 'write');
        const severity = LogMessageSeverity.warning;
        const category = "aaaaa";
        const caption = "bbbbb";
        const description = "ccccc";
        const parameters = undefined;
        const exception = undefined;
        const details = undefined;
        const methodSourceInfo = undefined;
        
        // Act
        loupe.warning(
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );

        // Assert
        expect(loupe.write).toHaveBeenCalledWith(
            severity,
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );
    });
});

describe('when loupe.error(...)', () => {
    it('should make call to loupe.write(...)', () => {
        // Arrange
        const loupe = new LoupeAgent(mockWindow, mockDocument);
        loupe.setCORSOrigin('http://localhost:3500/');
        spyOn(loupe, 'write');
        const severity = LogMessageSeverity.error;
        const category = "aaaaa";
        const caption = "bbbbb";
        const description = "ccccc";
        const parameters = undefined;
        const exception = undefined;
        const details = undefined;
        const methodSourceInfo = undefined;
        
        // Act
        loupe.error(
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );

        // Assert
        expect(loupe.write).toHaveBeenCalledWith(
            severity,
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );
    });
});

describe('when loupe.critical(...)', () => {
    it('should make call to loupe.write(...)', () => {
        // Arrange
        const loupe = new LoupeAgent(mockWindow, mockDocument);
        loupe.setCORSOrigin('http://localhost:3500/');
        spyOn(loupe, 'write');
        const severity = LogMessageSeverity.critical;
        const category = "aaaaa";
        const caption = "bbbbb";
        const description = "ccccc";
        const parameters = undefined;
        const exception = undefined;
        const details = undefined;
        const methodSourceInfo = undefined;
        
        // Act
        loupe.critical(
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );

        // Assert
        expect(loupe.write).toHaveBeenCalledWith(
            severity,
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );
    });
});

describe('when loupe.write(...)', () => {
    xit('should ???', () => {
        // Arrange
        const loupe = new LoupeAgent(mockWindow, mockDocument);
        loupe.setCORSOrigin('http://localhost:3500/');
        const category = "aaaaa";
        const caption = "bbbbb";
        const description = "ccccc";
        const parameters = undefined;
        const exception = undefined;
        const details = undefined;
        const methodSourceInfo = undefined;

        // Act
        loupe.write(
            LogMessageSeverity.information,
            category, 
            caption,
            description,
            parameters,
            exception,
            details,
            methodSourceInfo
        );

        // Assert
        expect(true).toBe(false);
    });
});