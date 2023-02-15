import { Component, OnInit } from '@angular/core';
import {
  LegendPositionOptions,
  Relegendable,
} from 'src/app/types/relegendable';

@Component({
  selector: 'app-relegendable-list',
  templateUrl: './relegendable-list.component.html',
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];

  ngOnInit() {
    this.addNew();
  }

  addNew() {
    var newRelegendable: Relegendable = {
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.centre,
      keycapColour: '',
    };
    this.relegendables.push(newRelegendable);
  }
}
