import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {
annonces;
  constructor(private annonceService: AnnoncesService) { }

  ngOnInit(): void {
    this.annonceService.getAllAnnonces().subscribe((data)=>{
      this.annonces=data;console.log(this.annonces)
          
          }),
          errors =>{
            console.log(errors);
          }
  }
  }


