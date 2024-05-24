import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  createOrden(ordenData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/createOrden', ordenData, { headers });
  }
}
