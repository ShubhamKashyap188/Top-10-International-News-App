import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {NgSpinningPreloader} from 'ng2-spinning-preloader';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }
   getNews(name = 'mashable') {
    return this.http.get('https://newsapi.org/v1/articles?source=' + name + '&sortBy=top&apiKey=361c6443a0de41779fff10cee195543c')
    .map((res: Response) => res.json());
  }
   getCategories() {
    return this.http.get('https://newsapi.org/v1/sources')
    .map((res: Response) => res.json());
  }


}
