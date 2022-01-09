import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AmbulanceModel } from 'src/app/models/ambulance.model';
import { AmbulanceService } from 'src/app/services/ambulance.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-ambulance-root',
  templateUrl: './ambulance-root.component.html',
  styleUrls: ['./ambulance-root.component.scss']
})
export class AmbulanceRootComponent implements OnInit {

  constructor(private router: Router,
    private ambulanceService:AmbulanceService)
  { }

  ambulancesList : MatTableDataSource<AmbulanceModel>;
  displayedColumns : string[] = ['Label', 'Options'];
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.refresAmbulanceList();
  }

  refresAmbulanceList()
  {
    let ambulances = this.ambulanceService.getAll();
    this.ambulancesList = new MatTableDataSource(ambulances);
    this.ambulancesList.sort = this.sort;
  }

  onMaintenance(ambulance: AmbulanceModel)
  {
    // this.router.navigate([`./ambulanceMaintenance/${ambulance.Code}`]);

    let code = ambulance.Code;
    this.router.navigate(['./ambulanceMaintenance/', {code: ambulance.Code}]);

    // this.router.navigateByUrl('/ambulanceMaintenance', { state: { code: code } });
  }

}
