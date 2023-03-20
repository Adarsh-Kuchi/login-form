import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  firstName!: string | null;
  lastName!: string | null;
  isLoggedIn: boolean = false;



  constructor( private auth:AuthServiceService , private router:Router) { }

  ngOnInit(): void {
    if(this.auth.isUserLoggedIn()){
      this.firstName = this.auth.getFirstName();
      this.lastName = this.auth.getLastName();
      this.isLoggedIn = true;
    }else{
      this.router.navigate(['/login']);
    }
  }
  logOut(){
    this.auth.logOut();
    this.router.navigate(['/login']);
  }

}
