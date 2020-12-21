import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string,
  title: string
}
export const ROUTES: RouteInfo[] = [
  { path: '/accueil', title: 'Accueil'},
  { path: '', title: 'L\'infpa'},
  { path: '', title: 'nos services'},
  { path: '', title: 'écoles de l\'institut'},
  { path: '', title: 'débouchers'},
  { path: '', title: 'partenaires'},
  { path: '', title: 'médiathèque'},
  { path: '', title: 'espace etudiant'},
  { path: '', title: 'contacts'}
]
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems:RouteInfo[]; 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  ngAfterViewInit() {
    var a = document.getElementById('premier').children;
    for (let index = 0; index < this.menuItems.length; index++) {
        if (this.router.url === this.menuItems[index].path) {
          a[index].classList.add('active');
        }
    }
  }
  active(t: number) {
    var a = document.getElementById('premier').children;
    for (let i =0; i<a.length; i++) {
      a[i].classList.remove('active');
      if (t==i) {
        a[t].classList.add('active');
      }
    }
  }

}
