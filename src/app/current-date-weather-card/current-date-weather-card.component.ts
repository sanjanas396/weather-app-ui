import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather, TimeWiseWeatherList } from '../models/weather-data.module';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-date-weather-card',
  templateUrl: './current-date-weather-card.component.html',
  styleUrls: ['./current-date-weather-card.component.css']
})
export class CurrentDateWeatherCardComponent implements OnInit{

  @Input()
  timeWiseWeatherList?: TimeWiseWeatherList[]

  length:number = 8
  currentWeather? : CurrentWeather


  constructor(public weatherService : WeatherService) {

  }

  ngOnInit(): void {
    this.timeWiseWeatherList = this.weatherService.getTimeWiseWeatherList();
    this.currentWeather = this.weatherService.getCurrentWeather();
  }

  getIcon() : string {
    return "assets/weather_icons/"+this.weatherService.currentWeather?.icon+".png"
  }

}
