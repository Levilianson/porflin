import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsocComponent } from './logsoc.component';

describe('LogsocComponent', () => {
  let component: LogsocComponent;
  let fixture: ComponentFixture<LogsocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
