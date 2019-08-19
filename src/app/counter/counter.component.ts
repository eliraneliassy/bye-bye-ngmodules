import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter value: {{counter}}</p>
    <button (click)="plus()">+</button>
    <button (click)="reset()">Reset</button>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() counter = 0;
  @Output() counterReset: EventEmitter<void> = new EventEmitter<void>();
  plus() { this.counter++; }
  reset() { this.counter = 0; }

}
