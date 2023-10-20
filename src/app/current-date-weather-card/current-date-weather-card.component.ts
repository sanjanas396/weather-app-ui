import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather, TimeWiseWeatherList } from '../models/weather-data.module';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-date-weather-card',
  templateUrl: './current-date-weather-card.component.html',
  styleUrls: ['./current-date-weather-card.component.css']
})
export class CurrentDateWeatherCardComponent implements OnInit {

  @Input()
  timeWiseWeatherList?: TimeWiseWeatherList[]
  currentWeather?: CurrentWeather


  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.timeWiseWeatherList = this.weatherService.getTimeWiseWeatherList();
    this.currentWeather = this.weatherService.getCurrentWeather();
  }

  getIcon(): string {
    return "assets/weather_icons/" + this.weatherService.currentWeather?.icon + ".png"
  }

  getWeekDay(timestamp: any) {
    const inputDate = new Date(timestamp);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[inputDate.getDay()]
    return dayOfWeek
  }

  formatDescription() {
    return this.weatherService.currentWeather?.desc.replace(/\b\w/g, (match) => match.toUpperCase());
  }

}
