import { Component } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
title=""
author=""
description=""
dateOfPublish=""

readValues=()=>
{
  let news:any={"title":this.title,"author":this.author,"description":this.description,"dateOfPublish":this.dateOfPublish}
  console.log(news)
}
}
