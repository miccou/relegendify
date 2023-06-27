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
    var newRelegendable: Relegendable = {
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.left,
      keycapColour: '',
    };
    this.relegendables.push(newRelegendable);
    // var newRelegendable: Relegendable = {
    //   legend: 'aaa\naaaaa',
    //   legendColour: '',
    //   legendPosition: LegendPositionOptions.right,
    //   keycapColour: '',
    // };
    // this.relegendables.push(newRelegendable);
    // var newRelegendable: Relegendable = {
    //   legend: 'aaa\naaaaa',
    //   legendColour: '',
    //   legendPosition: LegendPositionOptions.top,
    //   keycapColour: '',
    // };
    // this.relegendables.push(newRelegendable);
    // var newRelegendable: Relegendable = {
    //   legend: 'aaa\naaaaa',
    //   legendColour: '',
    //   legendPosition: LegendPositionOptions.bottom,
    //   keycapColour: '',
    // };
    // this.relegendables.push(newRelegendable);
    // var newRelegendable: Relegendable = {
    //   legend: 'aaa\naaaaa',
    //   legendColour: '',
    //   legendPosition: LegendPositionOptions.centre,
    //   keycapColour: '',
    // };
    // this.relegendables.push(newRelegendable);
    // var newRelegendable: Relegendable = {
    //   legend: 'aaa\naaaaa',
    //   legendColour: '',
    //   legendPosition: LegendPositionOptions.centre,
    //   keycapColour: '',
    // };
    // this.relegendables.push(newRelegendable);
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
