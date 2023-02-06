import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelegendableControlsComponent } from './relegendable-controls.component';

describe('RelegendableControlsComponent', () => {
  let component: RelegendableControlsComponent;
  let fixture: ComponentFixture<RelegendableControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelegendableControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelegendableControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
