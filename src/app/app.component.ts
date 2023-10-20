import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { TimeWiseWeatherList } from './models/weather-data.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'weather-app';
  searchText = ''
  dateMap? : Map<String, TimeWiseWeatherList[]>; 

  constructor(public weatherService : WeatherService) {}

  ngOnInit(): void {
    this.initData("");
    this.dateMap = this.weatherService.dateMap
  }

  initData(city : string) : void {
    this.weatherService.initWeatherData(city)
  }

  search() {
    this.initData(this.searchText)
  }
}

