import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  appEmailDomains = appEmailDomains;

  constructor(private router: Router, private AuthService: AuthService) {}

   loginHandler(form: NgForm):void {
    if(form.invalid) {return;}
  //   this.AuthService.user = {
  //     username: 'John'
  //   } as any;
 }
}
