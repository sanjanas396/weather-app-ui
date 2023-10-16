import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDateWeatherCardComponent } from './current-date-weather-card.component';

describe('CurrentDateWeatherCardComponent', () => {
  let component: CurrentDateWeatherCardComponent;
  let fixture: ComponentFixture<CurrentDateWeatherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentDateWeatherCardComponent]
    });
    fixture = TestBed.createComponent(CurrentDateWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
