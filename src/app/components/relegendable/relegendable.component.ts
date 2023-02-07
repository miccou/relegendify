import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-relegendable',
  templateUrl: './relegendable.component.html',
})
export class RelegendableComponent {
  @Input() relegendable: Relegendable = { text: '' };
}
