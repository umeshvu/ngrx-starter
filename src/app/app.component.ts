import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getData() {
    this.running = !this.running;
  }
  title = 'sample-application';

  running = false;
}
