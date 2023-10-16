/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWiseWeatherCardComponent } from './day-wise-weather-card-container.component';

describe('DayWiseWeatherCardComponent', () => {
  let component: DayWiseWeatherCardComponent;
  let fixture: ComponentFixture<DayWiseWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayWiseWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWiseWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
