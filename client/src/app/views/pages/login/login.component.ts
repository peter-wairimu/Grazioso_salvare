import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder,) {

    this.loginForm = this.formBuilder.group({
      email: new FormControl('',),
      password: new FormControl('',),
    });
   }

  ngOnInit() {

  }

}
