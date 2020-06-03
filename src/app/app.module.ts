import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule , Response } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import {NgSpinningPreloader} from 'ng2-spinning-preloader';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HomeService, NgSpinningPreloader ],
  bootstrap: [AppComponent]
})
export class AppModule { }
