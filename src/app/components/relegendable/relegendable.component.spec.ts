import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelegendableComponent } from './relegendable.component';

describe('RelegendableComponent', () => {
  let component: RelegendableComponent;
  let fixture: ComponentFixture<RelegendableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelegendableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelegendableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
