import { Component, Input, OnInit } from '@angular/core';
import {
  LegendPositionOptions,
  Relegendable,
} from 'src/app/types/relegendable';

@Component({
  selector: 'app-relegendable',
  templateUrl: './relegendable.component.html',
})
export class RelegendableComponent {
  @Input() relegendable: Relegendable = {
    legend: '',
    legendColour: '',
    legendPosition: LegendPositionOptions.centre,
    keycapColour: '',
  };

  LegendPositionOptions = LegendPositionOptions;

  ngOnInit() {}
}
