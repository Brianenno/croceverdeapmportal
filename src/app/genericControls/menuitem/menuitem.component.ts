import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "../../models/menuitem.model";

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {

  @Input("menuItem") menuItem: MenuItem;

  constructor() { }

  public routerLink:string = "";
  public itemLabel:string = "";

  ngOnInit(): void {
    this.routerLink = this.menuItem.routerLink;
    this.itemLabel = this.menuItem.itemLabel;
  }

}
