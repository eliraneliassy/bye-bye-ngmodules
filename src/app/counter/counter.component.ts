import { StorageService } from './../storage.service';
import { HttpClientModule } from '@angular/common/http';

import { Component, OnInit, Input, Output, EventEmitter, ɵdetectChanges, ɵɵdirectiveInject, INJECTOR } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter value: {{counter}}</p>
    <button (click)="plus()" class="btn btn-primary">+</button>
    <button (click)="reset()" class="btn btn-danger">Reset</button>
    <button (click)="save()" class="btn btn-success">Save</button>
  `,
  styleUrls: ['./counter.component.scss'],

})
export class CounterComponent {

  constructor(private storageService: StorageService) { }
  @Input() counter = 0;
  @Output() counterReset: EventEmitter<void> = new EventEmitter<void>();
  plus() { this.counter++; ɵdetectChanges(this); }
  reset() { this.counter = 0; ɵdetectChanges(this); }
  save() { this.storageService.saveCounter(this.counter); }

}
