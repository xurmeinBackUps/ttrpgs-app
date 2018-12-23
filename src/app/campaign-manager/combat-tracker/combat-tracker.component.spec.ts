import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatTrackerComponent } from './combat-tracker.component';

describe('CombatTrackerComponent', () => {
  let component: CombatTrackerComponent;
  let fixture: ComponentFixture<CombatTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
