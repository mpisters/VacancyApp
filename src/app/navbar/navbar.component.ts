import {Component, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() switchTab = new EventEmitter();
  currentTab = 'home';

  constructor(private render: Renderer2) {
  }

  ngOnInit() {
  }

  openMenu(): void {
    // const navs = document.querySelectorAll('.header__items');
    // navs.forEach(nav => nav.classList.toggle('header__toggleShow'));
    document.getElementById('sidenav').style.width = '250px';
  }

  closeMenu(): void {
    document.getElementById('sidenav').style.width = '0';

  }

  onSwitchTab(tab: string) {
    this.currentTab = tab;
    this.switchTab.emit(tab);
  }

}
