import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FrontLipLegendPositionOptions,
  LegendPositionOptions,
} from "src/app/types/relegendable";

@Component({
  selector: "app-position-picker",
  templateUrl: "./position-picker.component.html",
})
export class PositionPickerComponent implements OnInit {
  positions!: string[];

  selectedPosition!: LegendPositionOptions;

  @Input() groupName: string = Math.floor(Math.random() * 10000000).toString();
  @Input() position!: string;
  @Input() lip: boolean = false;
  @Output() positionSelected = new EventEmitter<LegendPositionOptions>();

  constructor() {}

  ngOnInit() {
    this.selectedPosition = this.position as LegendPositionOptions;
    if (this.lip) {
      this.positions = Object.values(FrontLipLegendPositionOptions);
    } else {
      this.positions = Object.values(LegendPositionOptions);
    }
  }

  onPositionChange(position: LegendPositionOptions) {
    this.selectedPosition = position;
    this.positionSelected.emit(this.selectedPosition); // Emit the selected position
  }
}
