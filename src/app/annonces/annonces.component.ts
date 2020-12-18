import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
annonces;
  constructor(public annonceService: AnnoncesService) { }

  ngOnInit(): void {
    
  }
}


