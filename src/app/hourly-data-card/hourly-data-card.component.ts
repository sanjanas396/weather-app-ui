import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { TimeWiseWeatherList } from '../models/weather-data.module';

@Component({
  selector: 'app-hourly-data-card',
  templateUrl: './hourly-data-card.component.html',
  styleUrls: ['./hourly-data-card.component.css']
})

export class HourlyDataCardComponent {

  @Input() currentWeather: any;

  timeWiseWeatherList?: TimeWiseWeatherList[]

  constructor(public weatherService: WeatherService) {}

  getTime(time: string): string {
    return time.slice(0, 5)
  }

  getIcon(iconId: string): string {
    return "assets/weather_icons/" + iconId + ".png"
  }
}
