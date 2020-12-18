import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {
  form: FormGroup;
  cout: number;

  constructor(public annonceService: AnnoncesService,private router: Router,private fb: FormBuilder) {
    this.form = this.fb.group({
      position: [null, [Validators.required]],
      caractere: [null, [Validators.required,Validators.maxLength(60)]]
      


     

    });
  } 
  get position() {
    return this.form.get('position');
  }
  get caractere() {
    return this.form.get('caractere');
  }
  ngOnInit(): void {
  }
  estimer(form){
    if(form['position']=='haut' && form['caractere']<=30){
      this.cout = 10;
    }
    else if(form['position']=='haut' && form['caractere']>=30){
      this.cout = 20;
    } 
    else if(form['position']=='bas' && form['caractere']<=30){
      this.cout = 5;
    }else {
      this.cout = 15;
    }
    console.log(this.cout);
    return this.cout;



}
}