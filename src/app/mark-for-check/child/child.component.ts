import { Component, OnInit, Input, ChangeDetectorRef, ɵmarkDirty } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  @Input() data: Observable<string[]>;
  numbers: string[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe(numbers => {
      this.numbers = [...this.numbers, ...numbers];
    });

  }

}
