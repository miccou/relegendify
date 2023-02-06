import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelegendableListComponent } from './relegendable-list.component';

describe('RelegendableListComponent', () => {
  let component: RelegendableListComponent;
  let fixture: ComponentFixture<RelegendableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelegendableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelegendableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
