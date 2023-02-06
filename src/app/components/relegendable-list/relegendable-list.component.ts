import { Component } from '@angular/core';

@Component({
  selector: 'app-relegendable-list',
  templateUrl: './relegendable-list.component.html'
})
export class RelegendableListComponent implements OnInit {
  relegendables: Relegendable[] = [];
 
  ngOnInit(){

  }

  addNew(){
    this.relegendables.push({} as Relegendable);
  }
}
