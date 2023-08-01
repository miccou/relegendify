import { Component, OnInit } from "@angular/core";
import {
  CustomEvents,
  GoogleAnalyticsService,
} from "src/app/services/google-analytics-service.service";
import { Relegendable } from "src/app/types/relegendable";

@Component({
  selector: "app-relegendable-list",
  templateUrl: "./relegendable-list.component.html",
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];

  includeFrontLip = false;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {
    this.relegendables.push(new Relegendable());
  }

  addNew() {
    this.relegendables.push(new Relegendable());
    this.googleAnalyticsService.trackEvent(CustomEvents.addRelegendable);
  }

  delete(rel: Relegendable) {
    this.relegendables.splice(
      this.relegendables.findIndex((r) => r.uuid == rel.uuid),
      1,
    );
    this.googleAnalyticsService.trackEvent(CustomEvents.deleteRelegendable);
  }
  clone(rel: Relegendable) {
    this.relegendables.splice(
      this.relegendables.findIndex((r) => r.uuid == rel.uuid) + 1,
      0,
      rel.clone(),
    );
    this.googleAnalyticsService.trackEvent(CustomEvents.addRelegendable);
  }
}
