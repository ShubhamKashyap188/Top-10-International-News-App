import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news= {};
  categories= {};
  name: String;
  constructor(private HomeService: HomeService) {
    this.name = 'mashable';
    this.HomeService.getNews().subscribe(data => (this.news = data));
    this.HomeService.getCategories().subscribe(data => (this.categories = data));

  }
  onNotify(message: any = []) {
    this.news['articles'] = message.articles;
    this.name = message.name;
  }
  searchChannel(id, name) {
    this.HomeService.getNews(id).subscribe(data => {
      this.news = data,
      this.name = name
    });
  }
  ngOnInit() {
  
      $('#menu-toggle').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
    });
    $(document).ready(function() {
      $('#mobile-nav').click(function(event) {
          $('nav#mobile').toggleClass('active');
      });
      $('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: 200
      });
    });
  }
}
