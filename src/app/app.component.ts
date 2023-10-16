import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faLocation, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';
import { City, DaywiseWeatherList, TimeWiseWeatherList, WeatherData } from './models/weather-data.module';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'weather-app';
  searchText = ''
  dateMap? : Map<String, TimeWiseWeatherList[]>; 

  faMagnifyingGlass:any = faMagnifyingGlass;
  faLocation:any = faLocation;
  faLocationDot:any = faLocationCrosshairs

  constructor(
    private httpClient : HttpClient,
    public weatherService : WeatherService) {

  }

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

