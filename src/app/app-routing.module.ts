import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaProvaComponent } from './prova-prova/prova-prova.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'prova',
    component:ProvaProvaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
