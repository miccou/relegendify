import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-relegendable',
  templateUrl: './relegendable.component.html',
})
export class RelegendableComponent {
  @Input() relegendable: Relegendable = {legend: '', legendColour: '', legendPosition :'centre', keycapColour :''};
}
