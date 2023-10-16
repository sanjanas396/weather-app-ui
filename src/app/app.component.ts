import { Component } from '@angular/core';
import { faMagnifyingGlass, faLocation, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  faMagnifyingGlass:any = faMagnifyingGlass;
  faLocation:any = faLocation;
  faLocationDot:any = faLocationCrosshairs
}
