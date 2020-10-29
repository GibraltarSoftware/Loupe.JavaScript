import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoupeAngularComponent } from './loupe-angular.component';

describe('LoupeAngularComponent', () => {
  let component: LoupeAngularComponent;
  let fixture: ComponentFixture<LoupeAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoupeAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoupeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
