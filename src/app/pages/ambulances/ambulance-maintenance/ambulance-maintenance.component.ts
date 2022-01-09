import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ambulance-maintenance',
  templateUrl: './ambulance-maintenance.component.html',
  styleUrls: ['./ambulance-maintenance.component.scss']
})
export class AmbulanceMaintenanceComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.code = params['code'];
    });
  }

  private code : any;
  private sub: any;

  ngOnInit(): void {

    // this.sub = this.route.queryParams.subscribe(params => {
    //   this.code = params['code'];
    // });

    // this.sub = this.route.paramMap
    //   .pipe(map(() =>
    //   {
    //     this.code = window.history.state
    //   }
    // ));

    // this.sub = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.code = params.get('id');
    //     return this.code;
    //   })
    // );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
