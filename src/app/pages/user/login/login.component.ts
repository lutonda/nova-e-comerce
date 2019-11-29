import { Component, OnInit } from '@angular/core';

import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {}

  submitted = false;

  onSubmit(m) {

    this.submitted = true; alert(JSON.stringify(m.value) + m.valid)
  }
}
