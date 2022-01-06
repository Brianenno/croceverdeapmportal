import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AmbulanceModel} from '../models/ambulance.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {

  constructor(private http:HttpClient)
  { }

  getAll(): AmbulanceModel[] {
    // return this.http.get<AmbulanceModel[]>(Parameters.hostControllers + '/api/Patient');
    let ambulances : AmbulanceModel[];
    ambulances = [
      {
        id: 1,
        label: "Romeo 92",
        code: "92"
      },
      {
        id: 2,
        label: "Romeo 93",
        code: "93"
      }
    ];
    return ambulances;
  }

}
