import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLivenewsComponent } from './view-livenews/view-livenews.component';
 
const myRoute:Routes=[
  {
    path:"",
    component:ViewLivenewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewLivenewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
