import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLivenewsComponent } from './view-livenews/view-livenews.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
const myRoute:Routes=[
  {
    path:"",
    component:AddNewsComponent
  },
  {
    path:"view",
    component:ViewLivenewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewLivenewsComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
