import { Component } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public email = '';
  public password = '';
  public msm_error_email = '';
  public msm_error_password = '';
  public btn_load = false;

  constructor(
    private _guestService: GuestService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      console.log(params['email']);
      if (params['email']) {
        this.email = params['email'];
      }
    });
  }

  validate() {
    if (!this.email) {
      this.msm_error_password = '';
      this.msm_error_email = 'El correo es requerido';
    } else if (!this.password) {
      this.msm_error_email = '';
      this.msm_error_password = 'La contraseña es requerida';
    } else {
      this.msm_error_password = '';
      this.msm_error_email = '';
      console.log(this.email + ' ' + this.password);
      console.log(this.email + ' ' + this.password);
      this.btn_load = true;
      this._guestService
        .logintCliente({
          email: this.email,
          password: this.password,
        })
        .subscribe((response) => {
          console.log(response);
          if (response.data != undefined) {
            localStorage.clear();
            localStorage.setItem('token', response.jwt);
            localStorage.setItem('user_data', JSON.stringify(response.data));
            this._router.navigate(['/']);
          } else {
            if (response.tipo == 'password') {
              this.msm_error_password = response.message;
            } else if (response.tipo == 'email') {
              this.msm_error_email = response.message;
            }
          }
          this.btn_load = false;
        });
    }
  }
}
