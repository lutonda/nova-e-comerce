import { Component, OnInit } from '@angular/core';

import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.userForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  }
  model:any={nome:'Username',password:'Password'};

  submitted = false;
  get f() { return this.userForm.controls; }

  onSubmit(m) { this.submitted = true; alert(JSON.stringify(m)) }
}
