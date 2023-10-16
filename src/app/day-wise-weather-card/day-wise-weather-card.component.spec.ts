import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDataCardComponent } from './day-wise-weather-card.component';

describe('WeeklyDataCardComponent', () => {
  let component: WeeklyDataCardComponent;
  let fixture: ComponentFixture<WeeklyDataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyDataCardComponent]
    });
    fixture = TestBed.createComponent(WeeklyDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
