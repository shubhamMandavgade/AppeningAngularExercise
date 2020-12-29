import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonDataServiceService } from '../shared/json-data-service.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userModal = new User();
  localS_Username;
  localS_password;
  localS_status_Obj;
  localS_status;
  LoginStat = {
    'status': 'true',
  }
  constructor(private router: Router, private _service: JsonDataServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') && (localStorage.getItem('password'))) {
      this.localS_Username = localStorage.getItem('username');
      this.localS_password = localStorage.getItem('password');
      this.localS_status_Obj = JSON.parse(localStorage.getItem('defaultReportData'));
      this.localS_status=this.localS_status_Obj.status;
      if (this.localS_status === 'true') {
        this.router.navigate(['/dashboard']);
      }
    }
  }
  signIn(form: NgForm) {
    if (localStorage.getItem('username') && (localStorage.getItem('password'))) {
      this.localS_Username = localStorage.getItem('username');
      this.localS_password = localStorage.getItem('password');
      if ((form.value.username === this.localS_Username) && (form.value.password === this.localS_password)) {
        localStorage.setItem('defaultReportData', JSON.stringify(this.LoginStat));
        this.router.navigate(['/dashboard']);
      } else {
        alert("Username or password is incorrect")
      }
    } else {
      alert("Please register yourself and try to login.")
    }

  }


}

