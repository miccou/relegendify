import { Component } from "@angular/core";
import {
  CustomEvents,
  GoogleAnalyticsService,
} from "src/app/services/google-analytics-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  print() {
    window.print();
    this.googleAnalyticsService.trackEvent(CustomEvents.print);
  }
}
