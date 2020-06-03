import { Component } from '@angular/core';
import {NgSpinningPreloader} from 'ng2-spinning-preloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private ngSpinningPreloader: NgSpinningPreloader) {
    this.ngSpinningPreloader.stop();
  }
}
