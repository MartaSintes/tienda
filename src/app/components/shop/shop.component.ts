import { Component } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { GLOBAL } from '../../services/GLOBAL';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  public productos: Array<any> = [];
  public url = GLOBAL.url;
  public load_producto = true;
  public page = 1;
  public pageSize = 4;

  constructor(private _guestService: GuestService) {}

  ngOnInit() {
    this.init_productos();
  }

  init_productos() {
     this.load_producto = true;
    this._guestService.getProductosShop().subscribe((response) => {
      this.productos = response.data;
      this.load_producto = false;
    });
  }
}
