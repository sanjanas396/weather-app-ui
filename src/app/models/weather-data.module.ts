export interface WeatherData {
    timeWiseWeatherList: TimeWiseWeatherList[]
    daywiseWeatherList: DaywiseWeatherList[]
    city: City
  }
  
  export interface TimeWiseWeatherList {
    currentWeather: CurrentWeather
    id: string
  }

  export interface DaywiseWeatherList {
    currentWeather: CurrentWeather
    id: string
  }
  
  export interface CurrentWeather {
    timeStamp: string
    temperature: number
    humidity: number
    tempMin: number
    tempMax: number
    windSpeed: number
    icon: string
    desc: string
    message: string
    clouds: number
    time: string
  }
  
  export interface City {
    id: number
    name: string
    country: string
  }
  