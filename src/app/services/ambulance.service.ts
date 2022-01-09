import {Injectable} from '@angular/core';
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
        Id: 1,
        Label: "Romeo 92",
        Code: "92"
      },
      {
        Id: 2,
        Label: "Romeo 93",
        Code: "93"
      }
    ];
    return ambulances;
  }

}
