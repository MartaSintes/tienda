import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../../services/guest.service';
import { GLOBAL } from '../../services/GLOBAL';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {
  public slug = '';
  public producto: any = {};
  public variaciones: Array<any> = [];
  public galeria: Array<any> = [];
  public url = GLOBAL.url;

  constructor(
    private _route: ActivatedRoute,
    private _guestService: GuestService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.slug = params['slug'];
      this.init_producto();
    });
  }

  init_producto() {
    this._guestService.getProductoShop(this.slug).subscribe((response) => {
      this.producto = response.producto;
      this.variaciones = response.variaciones;
      this.galeria = response.galeria;
      console.log(this.galeria);
    });
  }
  comprarProducto() {
    if (this._authService.checkLoggedIn()) {
      this._router.navigate(['/compra'], {
        state: { producto: this.producto },
      });
    } else {
      this._router.navigate(['/login']);
    }
  }
}
