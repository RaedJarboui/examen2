import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from '../models/Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }
  getAllAnnonces(){
    return this.http.get<Annonce[]>('/api/annonces/');
  }
  
}
