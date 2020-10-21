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

  describe('when loupe.information', () => {
    it('should make call to loupe.information', () => {
      // Arrange
      spyOn(service.loupe, 'information');
      
      // Act
      service.information("1111", "1111", "1111");

      // Assert
      expect(service.loupe.information).toHaveBeenCalled();
    });
  });

  describe('when loupe.verbose', () => {
    it('should make call to loupe.verbose', () => {
      // Arrange
      spyOn(service.loupe, 'verbose');
      
      // Act
      service.verbose("1111", "1111", "1111");

      // Assert
      expect(service.loupe.verbose).toHaveBeenCalled();
    });
  });

  describe('when loupe.warning', () => {
    it('should make call to loupe.warning', () => {
      // Arrange
      spyOn(service.loupe, 'warning');
      
      // Act
      service.warning("1111", "1111", "1111");

      // Assert
      expect(service.loupe.warning).toHaveBeenCalled();
    });
  });

  describe('when loupe.error', () => {
    it('should make call to loupe.error', () => {
      // Arrange
      spyOn(service.loupe, 'error');
      
      // Act
      service.error("1111", "1111", "1111");

      // Assert
      expect(service.loupe.error).toHaveBeenCalled();
    });
  });

  describe('when loupe.critical', () => {
    it('should make call to loupe.critical', () => {
      // Arrange
      spyOn(service.loupe, 'critical');
      
      // Act
      service.critical("1111", "1111", "1111");

      // Assert
      expect(service.loupe.critical).toHaveBeenCalled();
    });
  });
  
});
