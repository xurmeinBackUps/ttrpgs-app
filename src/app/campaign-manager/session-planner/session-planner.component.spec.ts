import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPlannerComponent } from './session-planner.component';

describe('SessionPlannerComponent', () => {
  let component: SessionPlannerComponent;
  let fixture: ComponentFixture<SessionPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
