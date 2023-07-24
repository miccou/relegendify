import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LegendPositionOptions } from "src/app/types/relegendable";

@Component({
  selector: "app-position-picker",
  templateUrl: "./position-picker.component.html",
})
export class PositionPickerComponent implements OnInit {
  positions = Object.values(LegendPositionOptions);
  selectedPosition!: LegendPositionOptions;

  @Input() groupName: string = Math.floor(Math.random() * 10000000).toString();
  @Input() position!: string;
  @Output() positionSelected = new EventEmitter<LegendPositionOptions>();

  ngOnInit() {
    this.selectedPosition = this.position as LegendPositionOptions;
  }

  onPositionChange(position: LegendPositionOptions) {
    this.selectedPosition = position;
    this.positionSelected.emit(this.selectedPosition); // Emit the selected position
  }
}
