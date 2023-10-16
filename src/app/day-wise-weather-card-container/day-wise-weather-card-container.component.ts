import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { TimeWiseWeatherList } from '../models/weather-data.module';

@Component({
  selector: 'app-day-wise-weather-card-container',
  templateUrl: './day-wise-weather-card-container.component.html',
  styleUrls: ['./day-wise-weather-card-container.component.css']
})
export class DayWiseWeatherCardComponent {

  @Input()
  dateMap? : Map<String, TimeWiseWeatherList[]>; 

  constructor(
    public weatherService : WeatherService) {
  }

}
