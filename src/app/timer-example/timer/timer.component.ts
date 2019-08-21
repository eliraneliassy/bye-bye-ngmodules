import { Component, OnInit, ɵmarkDirty, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Unsubscription } from '../unsubsribce.hoc';


@Unsubscription(['counterSubs'])
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  private counterSubs: Subscription;
  public counter: number;

  constructor() { }

  ngOnInit() {
    this.counterSubs = timer(0, 1000).subscribe(c => {
      this.counter = c;
    });
  }

  ngOnDestroy() {
    console.log('counter stopped at ' + this.counter);
  }

}
