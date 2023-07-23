import { Component, OnInit } from '@angular/core';
import {
  LegendPositionOptions,
  LegendPositionOptionsType,
  Relegendable,
} from 'src/app/types/relegendable';

@Component({
  selector: 'app-relegendable-list',
  templateUrl: './relegendable-list.component.html',
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];

  ngOnInit() {
    // Create and push new relegendable objects for each legend position
    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.centre,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.top,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.topLeft,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.topRight,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.bottom,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.bottomLeft,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.bottomRight,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.left,
      keycapColour: '',
      legendFontSize: 12,
    });

    this.relegendables.push({
      legend: 'aaa\naaaaa',
      legendColour: '',
      legendPosition: LegendPositionOptions.right,
      keycapColour: '',
      legendFontSize: 12,
    });
  }

  addNew() {
    // var newRelegendable: Relegendable = {
    //   legend: 'aaa\naaaaa',
    //   legendColour: '',
    //   legendPosition: LegendPositionOptions.centre,
    //   keycapColour: '',
    // };
    // this.relegendables.push(newRelegendable);
  }
}
