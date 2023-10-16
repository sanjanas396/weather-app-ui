import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrentDateWeatherCardComponent } from './current-date-weather-card/current-date-weather-card.component';
import { WeeklyDataCardComponent } from './day-wise-weather-card/day-wise-weather-card.component';
import { HourlyDataCardComponent } from './hourly-data-card/hourly-data-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DayWiseWeatherCardComponent } from './day-wise-weather-card-container/day-wise-weather-card-container.component';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [	
    AppComponent,
    CurrentDateWeatherCardComponent,
    WeeklyDataCardComponent,
    HourlyDataCardComponent,
      DayWiseWeatherCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
