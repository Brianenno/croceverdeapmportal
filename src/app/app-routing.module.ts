import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AmbulanceMaintenanceComponent } from './pages/ambulances/ambulance-maintenance/ambulance-maintenance.component';
import { AmbulanceRootComponent } from './pages/ambulances/ambulance-root/ambulance-root.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'ambulances',
    component:AmbulanceRootComponent
  },
  {
    path:'ambulanceMaintenance',
    component:AmbulanceMaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
