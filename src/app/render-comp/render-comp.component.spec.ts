import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCompComponent } from './render-comp.component';

describe('RenderCompComponent', () => {
  let component: RenderCompComponent;
  let fixture: ComponentFixture<RenderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
