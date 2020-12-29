import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  inputValue:any;
  searchKey;any;
  LoginStat = {
    'status': 'false',
  }
  localS_status_Obj;
  localS_status;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(!(localStorage.getItem('username')&&(localStorage.getItem('password')))){
      this.router.navigate(['/sign-in']);
    }else{
      this.localS_status_Obj = JSON.parse(localStorage.getItem('defaultReportData'));
      this.localS_status=this.localS_status_Obj.status;
      if (this.localS_status === 'false') {
        this.router.navigate(['/sign-in']);
      }
    }
  }
  getInputData(event:Event){
    this.searchKey=event;
  }

  logout(){
    localStorage.setItem('defaultReportData', JSON.stringify(this.LoginStat));
    this.router.navigate(['/sign-in']);
  }

}
