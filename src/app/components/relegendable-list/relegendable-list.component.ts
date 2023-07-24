import { Component, OnInit } from "@angular/core";
import {
  LegendAlignOptions,
  LegendPositionOptions,
  LegendPositionOptionsType,
  Relegendable,
} from "src/app/types/relegendable";

@Component({
  selector: "app-relegendable-list",
  templateUrl: "./relegendable-list.component.html",
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];

  ngOnInit() {
    this.relegendables.push(new Relegendable());
  }

  addNew() {
    this.relegendables.push({
      legend: "Aa",
      legendPosition: LegendPositionOptions.topLeft,
      legendFontSize: 10,
      legendAlign: LegendAlignOptions.alignCentre,
      legendColour: "#123456",
      keycapColour: "#abcdef",
    } as Relegendable);
  }
}
