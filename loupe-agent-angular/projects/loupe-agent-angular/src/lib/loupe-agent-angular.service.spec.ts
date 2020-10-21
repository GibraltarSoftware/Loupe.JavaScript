import { TestBed } from '@angular/core/testing';

import { LoupeAgentAngularService } from './loupe-agent-angular.service';

describe('LoupeAgentAngularService', () => {
  let service: LoupeAgentAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new LoupeAgentAngularService(window, document);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should instantiate loupe property', () => {
    expect(service.loupe).toBeTruthy();
  });

  describe('when loupe(...)', () => {
    it('should make call to loupe.information', () => {
      // Arrange
      spyOn(service.loupe, 'information');
      const category = "aaaaa";
      const caption = "bbbbb";
      const description = "ccccc";
      const parameters = undefined;
      const exception = undefined;
      const details = undefined;
      const methodSourceInfo = undefined;
      
      // Act
      service.information(
        category,
        caption, 
        description
      );

      // Assert
      expect(service.loupe.information).toHaveBeenCalledWith(
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

  describe('when verbose(...)', () => {
    it('should make call to loupe.verbose', () => {
      // Arrange
      spyOn(service.loupe, 'verbose');
      const category = "aaaaa";
      const caption = "bbbbb";
      const description = "ccccc";
      const parameters = undefined;
      const exception = undefined;
      const details = undefined;
      const methodSourceInfo = undefined;
      
      // Act
      service.verbose(
        category,
        caption, 
        description
      );

      // Assert
      expect(service.loupe.verbose).toHaveBeenCalledWith(
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

  describe('when warning(...)', () => {
    it('should make call to loupe.warning', () => {
      // Arrange
      spyOn(service.loupe, 'warning');
      const category = "aaaaa";
      const caption = "bbbbb";
      const description = "ccccc";
      const parameters = undefined;
      const exception = undefined;
      const details = undefined;
      const methodSourceInfo = undefined;

      // Act
      service.warning(
        category,
        caption, 
        description
      );

      // Assert
      expect(service.loupe.warning).toHaveBeenCalledWith(
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

  describe('when error(...)', () => {
    it('should make call to loupe.error', () => {
      // Arrange
      spyOn(service.loupe, 'error');
      const category = "aaaaa";
      const caption = "bbbbb";
      const description = "ccccc";
      const parameters = undefined;
      const exception = undefined;
      const details = undefined;
      const methodSourceInfo = undefined;
      
      // Act
      service.error(
        category,
        caption, 
        description
      );

      // Assert
      expect(service.loupe.error).toHaveBeenCalledWith(
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

  describe('when critical(...)', () => {
    it('should make call to loupe.critical', () => {
      // Arrange
      spyOn(service.loupe, 'critical');
      const category = "aaaaa";
      const caption = "bbbbb";
      const description = "ccccc";
      const parameters = undefined;
      const exception = undefined;
      const details = undefined;
      const methodSourceInfo = undefined;
      
      // Act
      service.critical(
        category,
        caption, 
        description
      );

      // Assert
      expect(service.loupe.critical).toHaveBeenCalledWith(
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
});
