import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'nova-e-comerce';
  user:any={};
  constructor(private spinner: NgxSpinnerService, private auth:AuthService, private router: Router) {}

  async ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.user=await this.auth.user();

  }

  async logout(event) {
    await this.auth.logout();
    window.location.reload()
  }
  handleClick(event: Event) {
    this.logout(event)
  }
}
