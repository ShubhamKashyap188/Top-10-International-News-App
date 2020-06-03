import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HomeService } from './../home/home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() notify  = new EventEmitter<any>();
  categories= {};
  news= {};
  name: String;
  constructor(private HomeService: HomeService) { }

  ngOnInit() {
    this.HomeService.getCategories().subscribe(data => (this.categories = data));
  }
  searchChannel(id, name) {
    this.HomeService.getNews(id).subscribe(data => {
      this.news = data,
      data['name'] = name,
      this.notify.emit(data);
    });
  }

}
