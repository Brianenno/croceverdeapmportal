import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MenuItem} from '../models/menuitem.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuitemsService {

  constructor(private http:HttpClient)
  { }

  getSideNavItems(): MenuItem[] {
    // return this.http.get<AmbulanceModel[]>(Parameters.hostControllers + '/api/Patient');
    let ambulances : MenuItem[];
    ambulances = [
      {
        itemLabel: "Ambulanze",
        routerLink: "ambulances"
      }
    ];
    return ambulances;
  }

}
