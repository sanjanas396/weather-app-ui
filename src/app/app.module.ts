import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrentDateWeatherCardComponent } from './current-date-weather-card/current-date-weather-card.component';
import { WeeklyDataCardComponent } from './weekly-data-card/weekly-data-card.component';
import { HourlyDataCardComponent } from './hourly-data-card/hourly-data-card.component';
@NgModule({
  declarations: [
    AppComponent,
    CurrentDateWeatherCardComponent,
    WeeklyDataCardComponent,
    HourlyDataCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
