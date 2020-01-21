import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isDashboardLinks: boolean = false;
  userData: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {

    if (localStorage.getItem('userData')) {
      this.isDashboardLinks = true;
      this.userData = JSON.parse(localStorage.getItem('userData'));

    } else {
      this.isDashboardLinks = false;
    }
    this.userService.localData.subscribe((data) => {
      if (data) {
        this.userData = data;
        this.isDashboardLinks = true;
      } else {
        this.isDashboardLinks = false;
      }
    })
  }

  logout() {
    this.isDashboardLinks = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
