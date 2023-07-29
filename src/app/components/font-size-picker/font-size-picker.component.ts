import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-font-size-picker",
  templateUrl: "./font-size-picker.component.html",
})
export class FontSizePickerComponent {
  @Input() fontSize!: number;
  @Output() fontSizeChange = new EventEmitter<number>();
}
