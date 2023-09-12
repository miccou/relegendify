import { Component, OnInit } from "@angular/core";
import {
  CustomEvents,
  GoogleAnalyticsService,
} from "src/app/services/google-analytics-service.service";
import { FrontLipLegendPositionOptions, LegendAlignOptions, LegendPositionOptions, Relegendable } from "src/app/types/relegendable";

@Component({
  selector: "app-relegendable-list",
  templateUrl: "./relegendable-list.component.html",
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];

  includeFrontLip = false;
  lessNoticeableBorder = false;
  boldLegends = false;
  invertColours = false;


  legendPosition = LegendPositionOptions.topLeft;
  legendAlign = LegendAlignOptions.alignCentre;
  legendFontSize = 10;
  frontLipLegendFontSize = 6;

  frontLipLegendPosition = FrontLipLegendPositionOptions.centre;

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

  changeIncludeFrontLip() {
    this.relegendables.forEach(
      (r) => (r.includeFrontLip = this.includeFrontLip),
    );
  }

  onPositionSelected(e:any){
    console.log(e)
  }

  onLipPositionSelected(e:any){
    console.log(e)
  }
}
