import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { TimeWiseWeatherList } from '../models/weather-data.module';

@Component({
  selector: 'app-hourly-data-card',
  templateUrl: './hourly-data-card.component.html',
  styleUrls: ['./hourly-data-card.component.css']
})

export class HourlyDataCardComponent implements OnInit{

  @Input() currentWeather:any;
  
  timeWiseWeatherList?: TimeWiseWeatherList[]


  constructor(public weatherService : WeatherService) {

  }

  ngOnInit(): void {

  }

  getTime(time : string): string {
    console.log( time.slice(0,5))
    return time.slice(0,5)
  }

  getIcon(iconId : string) : string {
    return "assets/weather_icons/"+iconId+".png"
  }

}
