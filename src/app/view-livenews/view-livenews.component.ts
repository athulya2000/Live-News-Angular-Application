import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-livenews',
  templateUrl: './view-livenews.component.html',
  styleUrls: ['./view-livenews.component.css']
})
export class ViewLivenewsComponent {
  constructor(private api:ApiService){
    api.fetchNews().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
data:any=[]
}
  