import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mark-for-check',
  templateUrl: './mark-for-check.component.html',
  styleUrls: ['./mark-for-check.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkForCheckComponent {

  numbers$ = new BehaviorSubject([1, 2, 3]);

  add(num) {
    this.numbers$.next([num]);
  }

}
