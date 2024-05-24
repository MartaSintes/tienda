import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { OrdenService } from '../../services/orden.service';


@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css'],
})
export class FormularioCompraComponent implements OnInit {
  public orden: any = {};
  public producto: any = {};
  public cliente: any = {};

  constructor(
    public activatedRoute: ActivatedRoute,
    public _ordenService: OrdenService,
    public _router: Router
  ) {}

  ngOnInit() {
   
    this.activatedRoute.paramMap
      .pipe(
        map(() => window.history.state),
        take(1)
      )
      .subscribe((producto) => (this.producto = producto.producto));
       this.cliente = localStorage.getItem('user_data');
        let data = localStorage.getItem('user_data');
        if (data) {
         this.cliente= JSON.parse(data)
        }
  }

  submitOrden() {
    if (!this.orden.direccion || !this.orden.tarjeta) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
    console.log(this.orden)
    const completeOrden = {
      cliente: this.cliente._id,
      producto: this.producto._id,
      direccion: this.orden.direccion,
      tarjeta: this.orden.tarjeta,
    };
    console.log(completeOrden)
    this._ordenService.createOrden(completeOrden).subscribe(
      (response) => {
        console.log(response);
        alert('Orden enviada exitosamente.');
        this._router.navigate(['/']);
      },
      (error) => {
        console.error(error);
        alert('Ocurrió un error al enviar la orden.');
      }
    );
  }
}
