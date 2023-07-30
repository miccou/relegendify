import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-font-size-picker",
  templateUrl: "./font-size-picker.component.html",
})
export class FontSizePickerComponent {
  selectedFontSize!: number;

  @Input() fontSize!: number;
  @Output() fontSizeChange = new EventEmitter<number>();

  ngOnInit() {
    this.selectedFontSize = this.fontSize;
  }

  onFontSizeChange(fontSize: number) {
    this.fontSize = fontSize;
    this.fontSizeChange.emit(this.fontSize);
  }
}
