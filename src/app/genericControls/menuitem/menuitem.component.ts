import { Component, OnInit, Input } from '@angular/core';
import { AmbulanceModel } from "../../models/ambulance.model";

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {

  @Input("ambulance") ambulance: AmbulanceModel;

  constructor() { }

  public routerLink:string = "";
  public itemLabel:string = "";

  ngOnInit(): void {
    this.routerLink = "ambulance/" + this.ambulance.code;
    this.itemLabel = this.ambulance.label;
  }

}
