import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LegendAlignOptions } from 'src/app/types/relegendable';

@Component({
  selector: 'app-align-picker',
  templateUrl: './align-picker.component.html',
})
export class AlignPickerComponent {
  @Input() align!: LegendAlignOptions;
  @Output() alignChange = new EventEmitter<LegendAlignOptions>();

  LegendAlignOptions = LegendAlignOptions;

  selectAlign(align: LegendAlignOptions) {
    this.align = align;
    this.alignChange.emit(align);
  }
}
