import { Component, OnInit } from "@angular/core";
import {
  CustomEvents,
  GoogleAnalyticsService,
} from "src/app/services/google-analytics-service.service";
import {
  DEFAULTS,
  LegendAlignOptions,
  LegendPositionOptions,
  Relegendable,
} from "src/app/types/relegendable";

@Component({
  selector: "app-relegendable-list",
  templateUrl: "./relegendable-list.component.html",
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];

  includeFrontLip = false;
  lessNoticeableBorder = false;
  boldLegends = false;

  legendPosition = LegendPositionOptions.topLeft;
  legendAlign = LegendAlignOptions.alignCentre;
  legendFontSize = 10;
  frontLipLegendFontSize = 6;

  frontLipLegendPosition = LegendPositionOptions.centre;

  hideState: "Hide" | "Show" = "Hide";

  legendColour = DEFAULTS.legendColour;
  keycapColour = DEFAULTS.keycapColour;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {
    this.relegendables.push(new Relegendable());
  }

  addNew() {
    let newRl = new Relegendable();
    if (this.includeFrontLip) {
      newRl.addFrontLip();
    }

    newRl.legendColour = this.legendColour;
    newRl.keycapColour = this.keycapColour;

    this.relegendables.push(newRl);

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

  changeIncludeFrontLip() {
    this.relegendables.forEach(
      (r) => (r.includeFrontLip = this.includeFrontLip),
    );
  }

  applyToAll() {
    this.relegendables.forEach((rl) => {
      rl.legendAlign = this.legendAlign;
      rl.legendFontSize = this.legendFontSize;
      rl.legendPosition = this.legendPosition;
      rl.frontLipLegendPosition = this.frontLipLegendPosition;
      rl.frontLipLegendFontSize = this.frontLipLegendFontSize;
    });
  }

  hide() {
    if (this.hideState == "Hide") {
      this.hideState = "Show";
    } else {
      this.hideState = "Hide";
    }
  }

  setLegendColour(colour: string){
    this.relegendables.forEach((rl) => {
      rl.legendColour = colour;
    });
  }

  setKeycapColour(colour:string){
    this.relegendables.forEach((rl) => {
      rl.keycapColour = colour;
    });
  }
}
