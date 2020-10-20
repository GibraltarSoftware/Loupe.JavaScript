import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoupeAgentAngularComponent } from './loupe-agent-angular.component';

describe('LoupeAgentAngularComponent', () => {
  let component: LoupeAgentAngularComponent;
  let fixture: ComponentFixture<LoupeAgentAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoupeAgentAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoupeAgentAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
