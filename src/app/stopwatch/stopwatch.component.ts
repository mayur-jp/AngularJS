// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-stopwatch',
//   templateUrl: './stopwatch.component.html',
//   styleUrls: ['./stopwatch.component.css']
// })
// export class StopwatchComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']


})
export class StopwatchComponent  {
  mm = 0;
  ss = 0;
  ms = 0;
  isRunning = false;
  timerId:any = 0;

  clickHandler() {
    if (!this.isRunning) { 
      // Stop => Running
      this.timerId = setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.ss++;
          this.ms = 0;
        }
        if (this.ss >= 60) {
          this.mm++;
          this.ss = 0
        }
      }, 10);
    } else {
      clearInterval(this.timerId);
    }
    this.isRunning = !this.isRunning;
  }

  Destroy() {
    this.ms = 0;
    this.mm = 0;
    this.ss = 0;
  }
  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
}
