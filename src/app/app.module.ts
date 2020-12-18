import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
const routes: Routes = [
  { path: 'list', component: ListAnnoncesComponent },
  { path: 'cout', component: EstimationCoutComponent }

  

];
@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    ListAnnoncesComponent,
    EstimationCoutComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
