import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDataCardComponent } from './hourly-data-card.component';

describe('HourlyDataCardComponent', () => {
  let component: HourlyDataCardComponent;
  let fixture: ComponentFixture<HourlyDataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyDataCardComponent]
    });
    fixture = TestBed.createComponent(HourlyDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
