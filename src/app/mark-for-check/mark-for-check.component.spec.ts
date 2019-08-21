import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkForCheckComponent } from './mark-for-check.component';

describe('MarkForCheckComponent', () => {
  let component: MarkForCheckComponent;
  let fixture: ComponentFixture<MarkForCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkForCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkForCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
