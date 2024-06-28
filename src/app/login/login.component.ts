import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ResponseLogin } from '../model/responselogin';
import { UserLogin } from '../model/userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginError: boolean = false;
  
  constructor(
    private service: LoginService
  ) { }

  ngOnInit(): void {
  }

  userLogin: UserLogin = {
    emailCustomer: '',
    passwordCustomer: ''
  }

  responseLogin: ResponseLogin = {
    token: '',
    refresh: ''
  }

  onSubmit() {
    this.service.login(this.userLogin).subscribe((response: any) => {
      console.log(response.token)
    });
  }

}
