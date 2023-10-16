import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { City, CurrentWeather, DaywiseWeatherList, TimeWiseWeatherList, WeatherData } from './models/weather-data.module';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = "http://localhost:8080/weather"
  weatherData: any;
  timeWiseWeatherList?: TimeWiseWeatherList[]
  dayWiseWeatherList?: DaywiseWeatherList[]
  dateMap = new Map<string, TimeWiseWeatherList[]>();
  city!: City;
  currentWeather?: CurrentWeather
  errorMessage : any

  defaultCurrentWeather: TimeWiseWeatherList =
    {
      "currentWeather": {
        "timeStamp": "2023-10-19 21:00:00",
        "temperature": 21.97,
        "humidity": 83,
        "tempMin": 20.31,
        "tempMax": 21.97,
        "windSpeed": 2.69,
        "icon": "10n",
        "desc": "light rain",
        "message": "Carry umbrella",
        "clouds": 46,
        "time": "21:00:00"
      },
      "id": "time_-825663742"
    }


  constructor(private httpClient: HttpClient) { }

  initWeatherData(cityName: string) {
    console.log("before "+cityName)
    if(cityName == undefined || cityName == "") {
      cityName = this.getClientCity()
      if(cityName == undefined || cityName == "") {
        cityName = 'bengaluru'
      }
    }
    console.log("after "+cityName)
    this.httpClient.get<WeatherData>(this.url, {
      params: new HttpParams()
        .set('city', cityName)
    }).subscribe(data => {
      console.log(data);
      this.weatherData = data;
      this.timeWiseWeatherList = this.weatherData?.timeWiseWeatherList;
      this.dayWiseWeatherList = this.weatherData?.daywiseWeatherList;
      this.dateMap = this.getDateMap()
      this.city = this.weatherData.city;
      this.currentWeather = this.getCurrentWeather()
      this.errorMessage = ""
      return this.weatherData;
    }, error => {
      if(navigator.onLine) {
        console.log("Invalid city name ", cityName);
        this.errorMessage = "Invalid city name :("
      } else {
        console.log("You are offline ", cityName);
        this.errorMessage = "You are offline"
      }
    })
  }

  getClientCity() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geocodingApiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        fetch(geocodingApiUrl)
          .then((response) => response.json())
          .then((data) => {
            return data.address.city;
          })
          .catch((error) => {
            console.error("Error getting location information:", error);
          });
      });
    }
    return ""
  }

  getTimeWiseWeatherList() {
    this.timeWiseWeatherList = this.weatherData?.timeWiseWeatherList;
    return this.timeWiseWeatherList;
  }

  getDayWiseWeatherList() {
    this.dayWiseWeatherList = this.weatherData?.daywiseWeatherList;
    return this.dayWiseWeatherList;
  }

  getDateMap() {
    this.dateMap = new Map<string, TimeWiseWeatherList[]>()
    this.dayWiseWeatherList?.forEach((item) => {
      const timeStamp = item.currentWeather.timeStamp;
      const date = timeStamp.split(" ")[0];
      if (!this.dateMap.has(date)) {
        this.dateMap.set(date, []);
      }
      this.dateMap.get(date)!.push(item);
    });

    this.dateMap.forEach((dataForDate, date) => {
      if (dataForDate.length < 8) {
        this.dateMap.delete(date); // Remove the entry from the map
      }
    });
    return this.dateMap;
  }

  getCurrentWeather(): CurrentWeather {
    return (this.timeWiseWeatherList == undefined) ? this.defaultCurrentWeather.currentWeather :
      this.timeWiseWeatherList[0].currentWeather;
  }

  reInitializeCurrentWeather(id: string) {
    this.timeWiseWeatherList?.forEach(cur => {
      if (cur.id == id) {
        this.currentWeather = cur.currentWeather;
        return;
      }
    })
  }

  reInitializeDayWeather(date: string) {
    this.timeWiseWeatherList = this.dateMap.get(date);
    this.currentWeather = this.getCurrentWeather()
  }

  
  getDayWiseCard(date : string)  {
    const list  =  this.dateMap.get(date);
    return (list && list.length > 0)? list[0] : undefined;
  }

}
