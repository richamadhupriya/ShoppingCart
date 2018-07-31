import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
 navbarOpen = false;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar()
  {
    this.navbarOpen = !this.navbarOpen;
  }

}
