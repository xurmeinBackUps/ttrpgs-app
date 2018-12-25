import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearTrackerComponent } from './gear-tracker.component';

describe('GearTrackerComponent', () => {
  let component: GearTrackerComponent;
  let fixture: ComponentFixture<GearTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
