import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from '@angular/material/table';
import { MenuitemComponent } from './genericControls/menuitem/menuitem.component';
import { HttpClientModule } from '@angular/common/http';
import { AmbulanceMaintenanceComponent } from './pages/ambulances/ambulance-maintenance/ambulance-maintenance.component';
import { AmbulanceRootComponent } from './pages/ambulances/ambulance-root/ambulance-root.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuitemComponent, AmbulanceMaintenanceComponent, AmbulanceRootComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
