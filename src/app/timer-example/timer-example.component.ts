import { Component, OnInit, ɵmarkDirty } from '@angular/core';

@Component({
  selector: 'app-timer-example',
  templateUrl: './timer-example.component.html',
  styleUrls: ['./timer-example.component.scss']
})
export class TimerExampleComponent {

  public alive = true;

  public destroy() {
    this.alive = false;
  }

  public revive() {
    this.alive = true;
  }
}

