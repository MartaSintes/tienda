import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  createTCliente(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/createCliente', data, {
      headers: headers,
    });
  }

  logintCliente(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/loginCliente', data, {
      headers: headers,
    });
  }
  getProductosShop(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/getProductosShop', {
      headers: headers,
    });
  }
  getProductoShop(slug: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/getProductoShop/' + slug, {
      headers: headers,
    });
  }

}
