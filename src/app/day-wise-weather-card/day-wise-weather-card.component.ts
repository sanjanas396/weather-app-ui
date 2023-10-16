import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather, DaywiseWeatherList, TimeWiseWeatherList } from '../models/weather-data.module';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-day-wise-weather-card',
  templateUrl: './day-wise-weather-card.component.html',
  styleUrls: ['./day-wise-weather-card.component.css']
})
export class WeeklyDataCardComponent implements OnInit{

  @Input()
  dateWeatherObj? : TimeWiseWeatherList
  date : any
  temparature! : any 
  constructor(private weatherService : WeatherService) {}


  ngOnInit(): void {
    this.date = this.getDateFromList()
    this.temparature = this.getTemparature()
  }

  getDateFromList() {
    return this.dateWeatherObj?.currentWeather.timeStamp.split(" ")[0];
  }

  getTemparature() {
    return this.dateWeatherObj?.currentWeather.temperature
  }

  getIcon() : string {
    return "assets/weather_icons/"+this.dateWeatherObj?.currentWeather.icon+".png"
  }

}
