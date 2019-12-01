import { Component, OnInit } from '@angular/core';

import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,private auth:AuthService) { }

  submitted = false;
  error='';
  async ngOnInit() {
    let isAuthenticated=await this.auth.isAuthenticated();
    if(isAuthenticated) {
      this.router.navigate(['/profile']);
    }
  }

  async onSubmit(m) {
    this.submitted = true;
    await this.auth.authentication(m.value).then(async user =>{
      await this.auth.createAuthSession(user);

      window.location.reload()
    })
    .catch((error)=> {
      this.error=error.statusText;
      //if(error.code==404)

     console.log('Promise rejected with ' + JSON.stringify(error));
   });
  }
}
