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
    this.relegendables.push(new Relegendable());
  }

  delete(rel: Relegendable) {
    this.relegendables.splice(
      this.relegendables.findIndex((r) => r.uuid == rel.uuid),
      1,
    );
  }
  clone(rel: Relegendable) {
    this.relegendables.splice(
      this.relegendables.findIndex((r) => r.uuid == rel.uuid) + 1,
      0,
      rel.clone(),
    );
  }
}
