import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public visibility: boolean = false;
  public type = "password";
  public Placeholder = "john.doe@gmail.com";

  constructor(public router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  toggle() {
    this.visibility = !this.visibility;
    this.type = this.visibility ? "text" : "password";
  }

  Register({value, valid}) {
    console.log(value, valid);
  }

}
