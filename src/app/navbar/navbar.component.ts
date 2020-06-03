import { Component, OnInit } from '@angular/core';
import {NgSpinningPreloader} from 'ng2-spinning-preloader';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ngSpinningPreloader: NgSpinningPreloader) {
    this.ngSpinningPreloader.stop();
  }
  ngOnInit() {
  }

}
