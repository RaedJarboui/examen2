import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from './models/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen2';
  article:number  ;
  constructor() { }

  ngOnInit(): void {

  }
  
  
  
  tab: Article[] = [ {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est ....',auteur:'Med Taher',date:'12/12/2005'},
  {titre:'les nouveaux parents',contenu:'les nouveaux parents ....',auteur:'Ahmed said',date:'11/11/2018'},
  {titre:'comment ecrire votre cv',contenu:'pour reussir a decrocher un emploi....',auteur:'Marie Elsa',date:'02/04/2005'}

  ]
AnnonceLength(): number{
  var nbAnnonce = 0;
  for(var i =0;i<this.tab.length;i++){
    nbAnnonce++;
  }
  console.log(nbAnnonce);
  return nbAnnonce;
}

nb: number = this.AnnonceLength();
onChange(newValue) {
  console.log(newValue);
  this.article = newValue;  // don't forget to update the model here
  // ... do other stuff here ...
}

}
