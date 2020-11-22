import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [true]
  })

  constructor(public router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  toggle() {
    console.log('toggle has been called');
    this.visibility = !this.visibility;
    this.type = this.visibility ? "text" : "password";
  }

  Login({ value, valid }) {
    console.log(value, valid);
    if(valid) {
      this.router.navigate(['dashboard'])
          .then(()=> {
            console.log('Navigated to the dashboard!');
          })
    }
  }

}
