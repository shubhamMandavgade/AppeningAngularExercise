import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userModal = new User();
  localS_Username;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (localStorage.getItem('username')) {
      this.localS_Username = localStorage.getItem('username')
      if (form.value.username == this.localS_Username) {
        alert("User already exists, please login.")
      }else{
        localStorage.setItem('username', form.value.username);
        localStorage.setItem('password', form.value.password);
        this.router.navigate(['/sign-in']);
      }
    } 
  }
}
