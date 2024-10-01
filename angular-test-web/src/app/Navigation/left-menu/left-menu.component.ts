import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { AuthenticationService } from '../../Authentication/authentication.service';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent implements OnInit {
  isLoggedIn: boolean = false;
  loginLogoutEvent = this.authenticationService.getLoginLogoutEvent()

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private location: Location
  ) {
    this.loginLogoutEvent.subscribe(() => {
      this.isLoggedIn = this.authenticationService.isLoggedIn();
      console.log('show left menu1')
    })
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    console.log('show left menu2')
  }
}
