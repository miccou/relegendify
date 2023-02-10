import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relegendable-list',
  templateUrl: './relegendable-list.component.html',
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];

  ngOnInit() {}

  addNew() {
    var newRelegendable: Relegendable = {
      legend: '',
      legendColour: '',
      legendPosition: 'centre',
      keycapColour: '',
    };
    this.relegendables.push(newRelegendable);
  }
}
