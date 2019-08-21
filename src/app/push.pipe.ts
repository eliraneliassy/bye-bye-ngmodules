
import { Pipe, PipeTransform, ChangeDetectorRef, WrappedValue, NgZone, OnDestroy } from '@angular/core';

import { Observable} from 'rxjs';
import { Subscription} from 'rxjs';


@Pipe({ name: 'push', pure: false })
export class PushPipe implements PipeTransform, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {
    NgZone.assertNotInAngularZone();
  }

  private obs: Observable<any>;
  private sub: Subscription;
  private value: any = null;
  private lastReturnedValue: any = null;

  transform<T>(obs: Observable<T>): any {
    if (!this.obs) {
      this.obs = obs;
      this.sub = obs.subscribe(value => {
        this.value = value;
        this.cdr.detectChanges();
      });
      this.lastReturnedValue = this.value;
      return this.value;
    }

    if (this.obs !== obs) {
      this.dispose();
      this.transform(obs);
    }
    if (this.value === this.lastReturnedValue) {
      return this.lastReturnedValue;
    }
    this.lastReturnedValue = this.value;

    return WrappedValue.wrap(this.value);
  }
  ngOnDestroy() {
    this.dispose();
  }
  dispose() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
      this.obs = null;
      this.lastReturnedValue = null;
      this.value = null;
    }
  }
}
