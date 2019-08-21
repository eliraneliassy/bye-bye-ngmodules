import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerExampleComponent } from './timer-example.component';

describe('TimerExampleComponent', () => {
  let component: TimerExampleComponent;
  let fixture: ComponentFixture<TimerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
