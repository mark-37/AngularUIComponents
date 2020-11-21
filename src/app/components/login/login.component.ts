import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Placeholder: string = "sample";
  visibility: boolean = false;
  text: string = "text";
  password: string = "password";
  type: string = "password";

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggle() {
    console.log('toggle has been called');
    this.visibility = !this.visibility;
    this.type = this.visibility ? "text" : "password";
  }

  Login() {
    
  }

}
