import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-officer-log-in',
  templateUrl: './officer-log-in.component.html',
  styleUrls: ['./officer-log-in.component.css']
})
export class OfficerLogInComponent implements OnInit {

  constructor(private router: Router) { }

 
  email: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    if (this.email == 'admin' && this.password == 'admin') {
      this.router.navigate(["officerlogin"]);
    } else {
      alert("Invalid credentials");
    }
  }
}
