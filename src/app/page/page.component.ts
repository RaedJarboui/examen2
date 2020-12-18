import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/Article';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
@Input() nbArticles: number;
@Input() listArticles: Article[];
c:number;
  constructor() { }

  ngOnInit(): void {
    console.log(this.listArticles.length);
    this.c = this.listArticles.length;
    console.log(this.nbArticles);
  }
  
  
  
  

}
