import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrkdeComponent } from './acrkde.component';

describe('AcrkdeComponent', () => {
  let component: AcrkdeComponent;
  let fixture: ComponentFixture<AcrkdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrkdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrkdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
