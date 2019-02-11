import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  openMenu(): void {
    const navs = document.querySelectorAll('.header__items');
    navs.forEach(nav => nav.classList.toggle('header__toggleShow'));
  }

}
