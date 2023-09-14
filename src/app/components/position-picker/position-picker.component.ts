import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LegendPositionOptions } from "src/app/types/relegendable";

@Component({
  selector: "app-position-picker",
  templateUrl: "./position-picker.component.html",
})
export class PositionPickerComponent implements OnInit {
  positions!: LegendPositionOptions[];
  @Input() groupName: string = Math.floor(Math.random() * 10000000).toString();
  @Input() position!: LegendPositionOptions;
  @Input() lip: boolean = false;
  @Output() positionChange = new EventEmitter<LegendPositionOptions>();

  constructor() {}

  ngOnInit() {
    if (this.lip) {
      this.positions = [
        LegendPositionOptions.left,
        LegendPositionOptions.centre,
        LegendPositionOptions.right,
      ];
    } else {
      this.positions = Object.values(LegendPositionOptions);
    }
  }

  onPositionChange(position: LegendPositionOptions) {
    this.position = position;
    this.positionChange.emit(this.position);
  }
}
